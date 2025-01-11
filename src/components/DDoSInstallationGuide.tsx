'use client';

import React from 'react';

export default function DDoSInstallationGuide() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-6">
          DDoS Mitigation Installation Guide
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-400">Installation Guide</h2>
          <p className="mt-2">
            Follow these steps to set up the DDoS mitigation system on a local machine or server.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-green-400">Setup Instructions</h2>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>
              <strong>Step 1: Start the Server</strong>
              <pre className="bg-gray-700 p-2 rounded-md mt-1">python3 server.py</pre>
            </li>
            <li>
              <strong>Step 2: Start the Panel Server</strong>
              <pre className="bg-gray-700 p-2 rounded-md mt-1">./panel-server</pre>
              <p>Access the dashboard at:</p>
              <pre className="bg-gray-700 p-2 rounded-md">http://localhost/panel.html</pre>
            </li>
            <li>
              <strong>Step 3: Set Up SSH Tunneling</strong>
              <pre className="bg-gray-700 p-2 rounded-md mt-1">ssh -R 80:localhost:&lt;PORT&gt;</pre>
              <p>Replace &lt;PORT&gt; with the correct server port.</p>
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-400">Using the DDoS Tool</h2>
          <p>
            Use the powerful Layer 7 DDoS tool,{' '}
            <a
              href="https://github.com/hoaan1995/ZxCDDoS"
              className="text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZxCDDoS
            </a>{' '}
            for testing.
          </p>
          <pre className="bg-gray-700 p-2 rounded-md mt-2">python3 c2.py username: admin pass: admin</pre>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400">Testing DDoS Mitigation</h2>
          <p>To test the mitigation, use the following command:</p>
          <pre className="bg-gray-700 p-2 rounded-md mt-2">crash xyz.com GET</pre>
        </section>

        {/* Download Section */}
        <section className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-cyan-400">Download Setup File</h2>
          <p className="mt-2">
            Click the link below to download the full DDoS mitigation tool setup (ZIP file):
          </p>
          <a
            href="https://www.mediafire.com/file/yzjjza5953z1zj7/Team_1947_%2528_DDos_Mitigation_Tool_%2529.zip/file"
            className="inline-block mt-3 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here to Download
          </a>
        </section>
      </div>
    </div>
  );
}