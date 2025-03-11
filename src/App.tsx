import React, { useState, useEffect } from 'react';
// import { Github, Twitter, Send } from 'lucide-react';
import GlitchText from './components/GlitchText';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowHeader(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-[-1]"></div>
        <div className="z-10 text-center">
          <GlitchText text="GUERRILLA TOOLS" />
          <p className="mt-6 text-green-400 text-lg tracking-wider animate-pulse">COMING SOON</p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-green-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Header */}
      <Header showHeader={showHeader} />


      {/* Contract Address */}
      <section className="py-20 px-4 text-center">
        <div className="inline-block border border-green-500 px-8 py-4 bg-black/50 backdrop-blur-sm">
          <div className="text-xl text-green-400 font-bold mb-2">CONTRACT ADDRESS</div>
          <GlitchText text="TBA" fontSize="text-2xl" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <FeatureSection 
          title="Power to the People" 
          description="Flip the script. Our bot lets you launch on pump.fun and snipes the launch with dedicated dev and bundler wallets—no more elite-only launches. Take charge, launch coins, and profit on your terms."
          imageUrl="/assets/monke.jpeg"
          imagePosition="right"
        />
        
        <FeatureSection 
          title="Next-Gen Utilities" 
          description="Your crypto edge in a volatile market. With real-time analytics and smart trading algorithms, you can launch coins or chase profits like a pro. This is next-gen launch tech for the masses."
          imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
          imagePosition="left"
        />
        
        <FeatureSection 
          title="Secure & Anonymous" 
          description="Privacy built-in. Separate wallets keep your personal wallets safe, so you launch, trade, and exit without ever exposing your identity. Security and anonymity come standard."
          imageUrl="/assets/secure.webp"
          imagePosition="right"
        />
        
        <FeatureSection 
          title="Community Driven" 
          description="Power to the people. Developed by and for the community, our bot is simple and almost free. Hold our token and register your wallet to launch. It's time to join the revolution."
          bulletPoints={[
            "100k for one launch per week",
            "250k for five launches per week",
            "1M for unlimited launches"
          ]}
          imageUrl="/assets/rocket.jpeg"
          imagePosition="left"
        />
      </section>

      {/* Roadmap */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Roadmap</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500/30"></div>
          
          {/* Phase 1 */}
          <div className="relative mb-16">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 1: Concept Development</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Define Bot Functionality</h4>
                    <p className="text-gray-400">Clear specification for token launches and wallet management</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Tokenomics Setup</h4>
                    <p className="text-gray-400">Token distribution structure established</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-green-900"></div>
              <div className="w-1/2"></div>
            </div>
          </div>

          {/* Phase 2 - Current */}
          <div className="relative mb-16">
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full border-4 border-green-900 animate-pulse"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 2: Development and Testing</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Build the Bot</h4>
                    <p className="text-gray-400">Development of core functionalities</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Beta Testing</h4>
                    <p className="text-gray-400">Feedback gathering and improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative mb-16">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 3: Launch</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Official Launch</h4>
                    <p className="text-gray-400">Public release of the bot</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Marketing Campaign</h4>
                    <p className="text-gray-400">Strategic promotion and user acquisition</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-800"></div>
              <div className="w-1/2"></div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative mb-16">
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-800"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 4: Growth and Community</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">KOL Partnerships</h4>
                    <p className="text-gray-400">Strategic collaborations with influencers</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Giveaways & Competitions</h4>
                    <p className="text-gray-400">Community rewards and engagement programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="relative mb-16">
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 5: Scaling and Security</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">Security Audits</h4>
                    <p className="text-gray-400">Third-party security verification</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">System Scalability</h4>
                    <p className="text-gray-400">Infrastructure improvements for growth</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-800"></div>
              <div className="w-1/2"></div>
            </div>
          </div>

          {/* Phase 6 */}
          <div className="relative">
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-800"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 6: Continuous Improvement</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">User Feedback Integration</h4>
                    <p className="text-gray-400">Regular updates based on community input</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">New Feature Rollout</h4>
                    <p className="text-gray-400">Ongoing development of new capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>© 2025 Guerilla Tools. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;