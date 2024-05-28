import React from 'react';

function Crowdfunding() {
  return (
    <>
<style>{`
        body {
          background-color: black;
          color: white;
        }
      `}</style>
      <section>
        <h1>CROWDFUNDING USING BLOCKCHAIN</h1>
        <div className="crowd_intro">
          <p>
            Crowdfunding is one of the most popular ways to raise funds for any project, cause or for helping any individual in need. With the onset of Covid we have seen a rise in Crowdfunding activities across the globe which includes small campaigns to help people get oxygen and medical help to large funds such as PM Cares.<br />
            The major problems with the Current Crowdfunding Platforms that we wanted to solve were :<br />
            <b>- Security : </b>As the funds become larger, they need to be heavily secure, although stringent measures such as symmetric encryption are in place to make e-payment safe and secure, it is still vulnerable to hacking. Blockchain [1] — which has never been compromised yet — can provide that level of security.<br />
            <b>- Transparency and Anti-Fraud :</b>b We have seen, and continue to see a lot of crowdfunding scams happening around. There is no way to see where the funds are being used. We wanted to make the entire flow of funds transparent at every stage, so that there is no possibility of the money being misused.<br />
            <b>- Global contribution :</b> With some of the platforms being country specific, it becomes hard for people from other countries to contribute to various campaigns. Using blockchain anyone in the world can contribute to the campaign. Transactions are quick and convenient.
          </p>
        </div>
      </section>

      <section>
        <h1>FEASIBILITY: TECHNICAL AND NON-TECHNICAL</h1>
        <div className="Feasibility">
          <p>
            <ul>
              <li>Technical Feasibility</li>
              <ul>
                <li>It is to be a ReactJS based application, which will be supported by any web browser.</li>
                <li>Internet connectivity will be required.</li>
                <li>Users will require ‘Metamask’ browser extension to sign transactions.</li>
              </ul>
              <li>Social Feasibility</li>
              <ul>
                <li>Crowdfunding over the years has helped people but has also seen heavy frauds in the name of Crowdfunding. With Betterfund we want to bring transparency to the process of crowdfunding and build trust among people to contribute to all the causes.</li>
              </ul>
              <li>Economic Feasibility</li>
              <ul>
                <li>Given the Ethereum Blockchain provides us with most of the security features, the development does not require much cost.</li>
                <li>The only cost would be the server cost of the deployed application.</li>
              </ul>
              <li>Scope</li>
              <ul>
                <li>With Betterfund we aim to make the crowdfunding process transparent, anti-fraudulent and secure.</li>
              </ul>
            </ul>
          </p>
        </div>
      </section>

 <section>
      <h1>WHAT IS BLOCKCHAIN?</h1>
      <div className="blockchain">
        <p>Blockchain is a decentralized, distributed ledger technology that allows for secure and transparent transactions without the need for a centralized intermediary. It was originally developed for use in the cryptocurrency Bitcoin, but has since been applied to a variety of other use cases.</p>
        <h2>How Does Blockchain Work?</h2>
        <p>Blockchain works by creating a continuously growing list of records, or blocks, which are linked and secured using cryptographic algorithms. Each block contains a timestamp, transaction data, and a reference to the previous block, creating a chain of blocks that cannot be altered without invalidating the entire chain. This makes it virtually impossible to tamper with the data stored in the blockchain.</p>
        <p>Each participant in the blockchain network has a copy of the entire ledger, and all transactions are verified by network consensus. This means that there is no need for a central authority to validate transactions, making blockchain a truly decentralized technology.</p>
        <h2>Benefits of Blockchain</h2>
        <p>Blockchain has a number of potential benefits, including:</p>
        <ul>
          <li>Decentralization and elimination of intermediaries: Blockchain eliminates the need for a centralized intermediary, such as a bank, by allowing transactions to be verified and recorded by network participants.</li>
          <li>Security and immutability: The use of cryptographic algorithms makes blockchain extremely secure, and the fact that the ledger is decentralized makes it nearly impossible to hack or alter. Once data has been recorded on the blockchain, it cannot be changed.</li>
          <li>Transparency and accountability: All transactions on the blockchain are public and can be viewed by anyone with access to the network. This creates a high level of transparency and accountability, as all participants can see what is happening on the network.</li>
          <li>Efficiency and cost savings: Blockchain can potentially reduce the need for intermediaries and manual processes, resulting in cost savings and increased efficiency.</li>
        </ul>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/SSo_EIwHSd4"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </section>
</>
  );
}
export default Crowdfunding;
