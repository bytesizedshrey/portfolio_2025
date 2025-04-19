
import React from 'react';
import { motion } from 'framer-motion';
import { NeumorphicText, NeumorphicBox, IsometricBox } from './ui/neumorphic';
import { Terminal, CommandLine } from './ui/terminal';
import { CyberIcon } from './ui/cyber-elements';

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <NeumorphicText variant="h2" className="text-center" glowing>
            <span className="text-cyber-neon-blue">./</span>about_me
            <span className="text-cyber-neon-green animate-terminal-blink">_</span>
          </NeumorphicText>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-blue mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Terminal with bio info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Terminal 
              className="w-full shadow-lg" 
              title="whoami@cybersec:~$"
            >
              <CommandLine 
                command="cat about.txt"
                output={`I am a cybersecurity professional specializing in network security, penetration testing, and ethical hacking. With a strong foundation in Python, C++, and Java, I approach security challenges with both technical precision and creative problem-solving.

My journey in cybersecurity began with a fascination for understanding how systems can be both built and broken. This curiosity evolved into a passion for protecting digital infrastructures and helping organizations strengthen their security posture.

When I'm not hunting vulnerabilities or analyzing network traffic, I enjoy participating in CTF competitions, contributing to open-source security tools, and keeping up with the latest developments in the rapidly evolving cybersecurity landscape.`}
              />
            </Terminal>
          </motion.div>
          
          {/* Skills visualization */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NeumorphicBox className="mb-8 p-6">
                <h3 className="font-cyber text-xl text-gradient-cyber mb-4">Technical Expertise</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SkillItem 
                    icon="code" 
                    title="Programming" 
                    items={["Python", "C++", "Java"]} 
                    color="hsl(var(--neon-blue))"
                  />
                  
                  <SkillItem 
                    icon="shield" 
                    title="Security" 
                    items={["Penetration Testing", "Vulnerability Assessment", "Threat Analysis"]} 
                    color="hsl(var(--neon-purple))"
                  />
                  
                  <SkillItem 
                    icon="server" 
                    title="Networks" 
                    items={["Network Security", "Firewall Configuration", "Traffic Analysis"]} 
                    color="hsl(var(--terminal-green))"
                  />
                  
                  <SkillItem 
                    icon="key" 
                    title="Tools" 
                    items={["Metasploit", "Wireshark", "Nmap", "Burp Suite"]} 
                    color="hsl(var(--neon-blue))"
                  />
                </div>
              </NeumorphicBox>
            </motion.div>
            
            {/* Isometric visual element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 transform translate-x-4 translate-y-8">
                  <IsometricBox 
                    width={100}
                    height={100}
                    depth={30}
                    color="rgba(139, 92, 246, 0.7)"
                    topColor="rgba(139, 92, 246, 0.85)"
                    rightColor="rgba(139, 92, 246, 0.5)"
                    parallax
                  >
                    <div className="text-sm">
                      <div className="font-bold">Education</div>
                      <div>B.S. Computer Science</div>
                    </div>
                  </IsometricBox>
                </div>
                
                <div className="absolute top-0 right-0 transform translate-x-2 translate-y-20">
                  <IsometricBox 
                    width={120}
                    height={80}
                    depth={25}
                    color="rgba(14, 165, 233, 0.7)"
                    topColor="rgba(14, 165, 233, 0.85)"
                    rightColor="rgba(14, 165, 233, 0.5)"
                    parallax
                  >
                    <div className="text-sm">
                      <div className="font-bold">Certifications</div>
                      <div>Security+</div>
                    </div>
                  </IsometricBox>
                </div>
                
                <div className="absolute bottom-0 left-0 transform translate-x-8 -translate-y-4">
                  <IsometricBox 
                    width={110}
                    height={90}
                    depth={35}
                    color="rgba(74, 222, 128, 0.7)"
                    topColor="rgba(74, 222, 128, 0.85)"
                    rightColor="rgba(74, 222, 128, 0.5)"
                    parallax
                  >
                    <div className="text-sm">
                      <div className="font-bold">Projects</div>
                      <div>6+ Security</div>
                    </div>
                  </IsometricBox>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  icon: 'code' | 'shield' | 'server' | 'key' | 'lock' | 'terminal' | 'database';
  title: string;
  items: string[];
  color: string;
}

function SkillItem({ icon, title, items, color }: SkillItemProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <CyberIcon icon={icon} glowing color={color} size={16} />
        <h4 className="font-cyber ml-2 text-white">{title}</h4>
      </div>
      <ul className="text-gray-300 text-sm ml-6 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="list-disc list-outside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
