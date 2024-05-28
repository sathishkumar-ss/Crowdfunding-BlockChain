import openai
import os
import requests
import socketio

API_KEY = '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'
os.environ['OPENAI_API_KEY'] = API_KEY
openai.api_key = os.environ['OPENAI_API_KEY']

# Create a Socket.IO client
sio = socketio.Client()

# Define a function to generate answers
def generate_answer(prompt):
    try:
        response = openai.Completion.create(
            engine='text-davinci-002',
            prompt=prompt,
            temperature=0.5,
            max_tokens=1024,
            n=1,
            stop=None,
        )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"Error generating answer: {e}")
        return "Sorry, I couldn't generate an answer to your question."

# Define a function to handle incoming messages
@sio.on('chat message')
def handle_message(message):
    # Check if the message is a question
    if message.lower().startswith('how to create a campaign'):
        answer = 'Step 1: Open the app and navigate to the campaigns tab. \nStep 2: Click on the create campaign button. \nStep 3: Fill out the campaign details such as the title, description, funding goal, and rewards. \nStep 4: Launch the campaign!'
    else:
        answer = generate_answer(message + '\nAnswer:')
    # Send the generated answer back to the client
    sio.emit('chat message', answer)

# Connect to the WebSocket server
sio.connect('http://localhost:5173')

# Start the WebSocket event loop
sio.wait()
