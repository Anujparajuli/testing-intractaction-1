// Global variables
let isScrolling = false;
let hackerModeActive = false;
let sniperModeActive = false;
let konamiSequence = [];
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let secretTraitClicks = 0;
let nameClickCount = 0;
let xpHoverCount = 0;
let glowClickCount = 0;
let visitStartTime = Date.now();

// Secret messages and responses
const secretMessages = {
    name: [
        "Systems online...",
        "Neural pathways activated...", 
        "Quantum consciousness engaged...",
        "🔓 SECRET: I code in my dreams!",
        "👾 CLASSIFIED: My first program was a game!"
    ],
    aiResponses: [
        "Hello! I'm Anuj's cyber assistant. How can I help you explore his digital realm?",
        "Welcome to the neural network! What would you like to know about Anuj's projects?",
        "Greetings, digital wanderer! I can tell you secrets about this portfolio...",
        "🤖 Cyber Assistant online! Ask me about easter eggs or hidden features!",
        "I detect curiosity in your patterns. What mysteries shall we uncover?"
    ],
    devNotes: {
        swastha: "// DEV NOTES - Swastha Sewa App\n\n- Challenge: Creating intuitive healthcare UX\n- Solution: User-centered design approach\n- Tech: Figma for rapid prototyping\n- Learning: Healthcare UI requires extra accessibility\n- Easter egg: Hidden healing animation on load\n\n// Future plans: Add voice commands for elderly users",
        comic: "// DEV NOTES - Comic Guide App\n\n- Built with vanilla JS for performance\n- API integration was the trickiest part\n- Used local storage for user preferences\n- Fun fact: Contains 50+ hidden comic references\n\n// Secret feature: Konami code unlocks retro mode\n// TODO: Add offline mode with service workers",
        dashboard: "// DEV NOTES - Sales Dashboard\n\n- Power BI + Excel data transformation\n- Real-time updates every 15 seconds\n- Color scheme optimized for long viewing\n- Hidden feature: Click logo 5x for debug mode\n\n// Performance: Handles 100K+ data points smoothly",
        network: "// DEV NOTES - Network Configuration\n\n- Kali Linux security implementation\n- Custom firewall rules and monitoring\n- Automated threat detection system\n- Fun addition: ASCII art in terminal outputs\n\n// Security level: Military-grade encryption used"
    },
    serviceTips: {
        uiux: "🎨 Pro tip: Good UI/UX design is invisible - users shouldn't have to think about how to use it!",
        frontend: "💻 Secret: Every pixel is purposefully placed. I obsess over the details you don't notice!",
        data: "📊 Hidden insight: Data tells stories, but visualization makes them unforgettable!",
        network: "🛡️ Classified: Your network security is only as strong as its weakest link!"
    }
};

const codeSnippets = {
    html: "<!-- Secret HTML Snippet -->\n<div class='easter-egg'>\n  <span class='glitch'>SYSTEM BREACHED</span>\n</div>",
    css: "/* Cyberpunk CSS Magic */\n.neon-glow {\n  text-shadow: 0 0 10px #00D9FF,\n               0 0 20px #00D9FF,\n               0 0 40px #00D9FF;\n  animation: pulse 2s infinite;\n}",
    javascript: "// Neural Network Function\nfunction hackTheMatrix() {\n  console.log('🔓 Access Granted');\n  reality.bend();\n  possibilities.multiply();\n}",
    react: "// Quantum React Component\nconst CyberMind = () => {\n  const [consciousness, expand] = useState(0);\n  \n  useEffect(() => {\n    expand(prev => prev + Math.random());\n  }, [thoughts]);\n  \n  return <Reality>{consciousness}</Reality>;\n};"
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTypewriter();
    initializeAnimations();
    initializeScrollEffects();
    initializeParticles();
    initializeContactForm();
    initializeMobileMenu();
    initializeSecretFeatures();
    initializeAIAssistant();
    initializeCursorTrail();
    initializeHUD();
    checkTimeBasedTriggers();
});

// Initialize secret features
function initializeSecretFeatures() {
    initializeGlitchToggle();
    initializeCrosshairMode();
    initializeTerminalAccess();
    initializeNameClicks();
    initializeHoverExplosion();
    initializeTraitCombo();
    initializeTimelineScrambler();
    initializeSkillXP();
    initializeProjectSecrets();
    initializeServiceSecrets();
    initializeContactSecrets();
    initializeKonamiCode();
    initializeGhostNavigation();
    initializeChatbot();
    initializeBlurTrigger();
    initializeDarkZone();
}

// Glitch Toggle (Hacker Mode)
function initializeGlitchToggle() {
    const glitchToggle = document.getElementById('glitchToggle');
    if (glitchToggle) {
        glitchToggle.addEventListener('click', function() {
            hackerModeActive = !hackerModeActive;
            document.body.classList.toggle('hacker-mode', hackerModeActive);
            
            // Show notification
            showNotification(
                hackerModeActive ? '🔓 HACKER MODE ACTIVATED' : '🔒 NORMAL MODE RESTORED',
                hackerModeActive ? 'success' : 'info'
            );
            
            // Add glitch effect to all text
            if (hackerModeActive) {
                document.querySelectorAll('h1, h2, h3').forEach(el => {
                    el.classList.add('glitch-text');
                });
            } else {
                document.querySelectorAll('.glitch-text').forEach(el => {
                    el.classList.remove('glitch-text');
                });
            }
        });
    }
}

// Crosshair Mode (Sniper UI)
function initializeCrosshairMode() {
    const crosshairTarget = document.getElementById('crosshairTarget');
    if (crosshairTarget) {
        crosshairTarget.addEventListener('click', function() {
            sniperModeActive = !sniperModeActive;
            document.body.classList.toggle('sniper-mode', sniperModeActive);
            
            showNotification(
                sniperModeActive ? '🎯 SNIPER MODE ENGAGED' : '🎯 SNIPER MODE DISENGAGED',
                'info'
            );
        });
    }
}

// Terminal Access
function initializeTerminalAccess() {
    const terminalTrigger = document.getElementById('terminalTrigger');
    const terminalModal = document.getElementById('terminalModal');
    const closeTerminal = document.getElementById('closeTerminal');
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    
    if (terminalTrigger && terminalModal) {
        terminalTrigger.addEventListener('click', function() {
            terminalModal.classList.remove('hidden');
            terminalInput.focus();
        });
        
        closeTerminal.addEventListener('click', function() {
            terminalModal.classList.add('hidden');
        });
        
        terminalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim();
                processTerminalCommand(command);
                this.value = '';
            }
        });
    }
}

// Process terminal commands
function processTerminalCommand(command) {
    const output = document.getElementById('terminalOutput');
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span style="color: var(--neon-blue);">anuj@portfolio:~$</span> ${command}`;
    output.appendChild(commandLine);
    
    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line';
    
    switch(command.toLowerCase()) {
        case 'help':
            responseLine.innerHTML = `Available commands:<br>
            - whoami: Display user info<br>
            - skills: List technical skills<br>
            - projects: Show project status<br>
            - contact: Display contact information<br>
            - hack: Initiate cyber protocol<br>
            - clear: Clear terminal`;
            break;
        case 'whoami':
            responseLine.innerHTML = 'User: Anuj Parajuli<br>Role: Frontend Developer & UI/UX Designer<br>Location: Kathmandu, Nepal<br>Status: ONLINE';
            break;
        case 'skills':
            responseLine.innerHTML = 'Skills loaded: [React] [JavaScript] [Python] [Figma] [Power BI]<br>Skill level: ADVANCED<br>Learning mode: CONTINUOUS';
            break;
        case 'projects':
            responseLine.innerHTML = 'Project status:<br>✓ Swastha Sewa App - COMPLETED<br>✓ Comic Guide - LIVE<br>✓ Sales Dashboard - COMPLETED<br>✓ Network Config - COMPLETED';
            break;
        case 'contact':
            responseLine.innerHTML = 'Email: Anuj.parajulisep23@cps.edu.np<br>Phone: +977 9746235377<br>Location: Kathmandu, Nepal';
            break;
        case 'hack':
            responseLine.innerHTML = '<span style="color: var(--neon-green);">Initiating cyber protocol...</span><br>🔓 Access granted to neural network<br>🌐 Matrix connection established<br>⚡ Reality.exe has stopped working';
            break;
        case 'clear':
            output.innerHTML = '<div class="terminal-line">Terminal cleared...</div>';
            return;
        default:
            responseLine.innerHTML = `Command not found: ${command}<br>Type 'help' for available commands`;
    }
    
    output.appendChild(responseLine);
    output.scrollTop = output.scrollHeight;
}

// Secret Name Click Effect
function initializeNameClicks() {
    const clickableName = document.getElementById('clickableName');
    if (clickableName) {
        clickableName.addEventListener('click', function() {
            nameClickCount++;
            
            if (nameClickCount <= secretMessages.name.length) {
                showNotification(secretMessages.name[nameClickCount - 1], 'info');
            }
            
            // Add glitch effect
            this.style.animation = 'glitch 0.5s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            // Reset counter after showing all messages
            if (nameClickCount >= secretMessages.name.length) {
                setTimeout(() => {
                    nameClickCount = 0;
                }, 5000);
            }
        });
    }
}

// Hover Explosion on Hero Buttons
function initializeHoverExplosion() {
    const heroButtons = document.querySelectorAll('#projectsBtn, #resumeBtn');
    
    heroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            let hoverCount = parseInt(this.dataset.hoverCount) + 1;
            this.dataset.hoverCount = hoverCount;
            
            if (hoverCount >= 10) {
                triggerButtonExplosion(this);
                this.dataset.hoverCount = '0'; // Reset
            }
        });
    });
}

function triggerButtonExplosion(button) {
    // Create explosion effect
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--neon-blue);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        const rect = button.getBoundingClientRect();
        particle.style.left = (rect.left + rect.width / 2) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particles
        const angle = (i / 20) * Math.PI * 2;
        const distance = 100;
        const duration = 1000;
        
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                opacity: 0
            }
        ], duration).onfinish = () => particle.remove();
    }
    
    showNotification('💥 BUTTON OVERLOAD! Nice hovering skills!', 'success');
}

// Trait Combo Click
function initializeTraitCombo() {
    const traitItems = document.querySelectorAll('.secret-trait');
    let clickedTraits = [];
    
    traitItems.forEach(trait => {
        trait.addEventListener('click', function() {
            const traitName = this.dataset.trait;
            clickedTraits.push(traitName);
            
            // Check if all 3 traits clicked within 3 seconds
            if (clickedTraits.length === 3) {
                const secretBadge = document.getElementById('secretBadge');
                if (secretBadge) {
                    secretBadge.classList.remove('hidden');
                    showNotification('🏆 TRAIT MASTER UNLOCKED!', 'success');
                    
                    setTimeout(() => {
                        secretBadge.classList.add('hidden');
                    }, 5000);
                }
                clickedTraits = [];
            }
            
            // Reset if too slow
            setTimeout(() => {
                clickedTraits = [];
            }, 3000);
        });
    });
}

// Timeline Scrambler
function initializeTimelineScrambler() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let dragCount = 0;
    
    timelineItems.forEach(item => {
        item.addEventListener('dragstart', function() {
            dragCount++;
            if (dragCount >= 3) {
                triggerTimeJump();
                dragCount = 0;
            }
        });
    });
}

function triggerTimeJump() {
    const timeJump = document.getElementById('timeJump');
    if (timeJump) {
        timeJump.classList.remove('hidden');
        document.querySelector('.timeline-panel').style.filter = 'hue-rotate(180deg)';
        
        setTimeout(() => {
            timeJump.classList.add('hidden');
            document.querySelector('.timeline-panel').style.filter = '';
        }, 3000);
    }
}

// Skill XP System
function initializeSkillXP() {
    const skillItems = document.querySelectorAll('.secret-skill');
    const xpBar = document.getElementById('xpBar');
    const xpFill = document.getElementById('xpFill');
    const levelUp = document.getElementById('levelUp');
    
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            let hoverCount = parseInt(this.dataset.hoverCount) + 1;
            this.dataset.hoverCount = hoverCount;
            
            xpHoverCount++;
            
            if (!xpBar.classList.contains('hidden')) {
                const progress = Math.min((xpHoverCount / 10) * 100, 100);
                xpFill.style.width = progress + '%';
                
                if (xpHoverCount >= 10) {
                    levelUp.classList.remove('hidden');
                    showNotification('🎉 SKILL LEVEL UP!', 'success');
                    
                    setTimeout(() => {
                        levelUp.classList.add('hidden');
                        xpHoverCount = 0;
                        xpFill.style.width = '0%';
                    }, 3000);
                }
            } else if (hoverCount === 1) {
                xpBar.classList.remove('hidden');
            }
        });
        
        // Secret click for hack game
        skill.addEventListener('click', function() {
            const skillName = this.dataset.skill;
            if (codeSnippets[skillName]) {
                showHackGame(skillName);
            }
        });
    });
}

function showHackGame(skill) {
    const modal = document.getElementById('hackGameModal');
    const codeSnippet = document.getElementById('codeSnippet');
    
    if (modal && codeSnippet) {
        codeSnippet.textContent = codeSnippets[skill];
        modal.classList.remove('hidden');
        
        document.getElementById('closeHackGame').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    }
}

// Project Secrets
function initializeProjectSecrets() {
    // Glitched project special click
    const glitchedProject = document.querySelector('.glitched-project');
    if (glitchedProject) {
        let clickCount = 0;
        glitchedProject.addEventListener('click', function() {
            clickCount++;
            if (clickCount >= 3) {
                showSecretProject();
                clickCount = 0;
            }
        });
    }
    
    // Dev notes icons
    document.querySelectorAll('.dev-notes-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const project = this.dataset.project;
            showDevNotes(project);
        });
    });
    
    // Project sequence click (comic + swastha)
    let projectSequence = [];
    document.querySelectorAll('.secret-project-trigger').forEach(project => {
        project.addEventListener('click', function() {
            const projectName = this.dataset.project;
            projectSequence.push(projectName);
            
            if (projectSequence.length === 2 && projectSequence.includes('comic') && projectSequence.includes('swastha')) {
                showNotification('🎭 SECRET GALLERY UNLOCKED!', 'success');
                projectSequence = [];
            }
            
            setTimeout(() => {
                projectSequence = [];
            }, 2000);
        });
    });
}

function showSecretProject() {
    const modal = document.getElementById('secretProjectModal');
    if (modal) {
        modal.classList.remove('hidden');
        
        document.getElementById('closeSecretProject').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    }
}

function showDevNotes(project) {
    const panel = document.getElementById('devNotesPanel');
    const notesText = document.getElementById('devNotesText');
    
    if (panel && notesText) {
        notesText.textContent = secretMessages.devNotes[project] || 'No dev notes available for this project.';
        panel.classList.remove('hidden');
        
        document.getElementById('closeDevNotes').addEventListener('click', function() {
            panel.classList.add('hidden');
        });
    }
}

// Service Secrets
function initializeServiceSecrets() {
    const serviceCards = document.querySelectorAll('.secret-service');
    const glowMeter = document.getElementById('glowMeter');
    const glowFill = document.getElementById('glowFill');
    const confettiOverlay = document.getElementById('confettiOverlay');
    
    serviceCards.forEach(card => {
        // Triple click decrypt mode
        card.addEventListener('click', function() {
            let clickCount = parseInt(this.dataset.clickCount) + 1;
            this.dataset.clickCount = clickCount;
            
            if (clickCount === 3) {
                const service = this.dataset.service;
                showNotification(`🔓 ${service.toUpperCase()} DECRYPT MODE ACTIVATED!`, 'success');
                this.style.filter = 'hue-rotate(120deg)';
                
                setTimeout(() => {
                    this.style.filter = '';
                    this.dataset.clickCount = '0';
                }, 3000);
            }
        });
        
        // Glow meter
        card.addEventListener('click', function() {
            glowClickCount++;
            
            if (!glowMeter.classList.contains('hidden')) {
                const progress = Math.min((glowClickCount / 4) * 100, 100);
                glowFill.style.width = progress + '%';
                
                if (glowClickCount >= 4) {
                    confettiOverlay.classList.remove('hidden');
                    showNotification('🎉 CONFETTI UNLOCKED!', 'success');
                    
                    setTimeout(() => {
                        confettiOverlay.classList.add('hidden');
                        glowClickCount = 0;
                        glowFill.style.width = '0%';
                    }, 3000);
                }
            } else {
                glowMeter.classList.remove('hidden');
            }
        });
    });
    
    // Audio reveal
    document.querySelectorAll('.secret-speaker').forEach(speaker => {
        speaker.addEventListener('click', function(e) {
            e.stopPropagation();
            const service = this.dataset.service;
            showNotification(secretMessages.serviceTips[service], 'info');
        });
    });
}

// Contact Secrets
function initializeContactSecrets() {
    // Secret input trigger
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.toLowerCase() === 'cyber') {
                showSecretChatInput();
            }
        });
    }
    
    // Email period click
    const emailPeriod = document.getElementById('emailPeriod');
    if (emailPeriod) {
        emailPeriod.addEventListener('click', function() {
            showNotification('📧 ALTERNATE CONTACT PORTAL ACTIVATED!', 'info');
            // Could show alternate contact form here
        });
    }
    
    // Cipher puzzle
    const cipherText = document.querySelector('.cipher-text');
    if (cipherText) {
        cipherText.addEventListener('click', function() {
            // Decode hex to GitHub link
            const decoded = this.textContent.split(' ').map(hex => 
                String.fromCharCode(parseInt(hex, 16))
            ).join('');
            
            showNotification(`🔓 CIPHER DECODED: ${decoded}`, 'success');
        });
    }
}

function showSecretChatInput() {
    const secretChat = document.getElementById('secretChatInput');
    if (secretChat) {
        secretChat.classList.remove('hidden');
        document.getElementById('secretChat').focus();
    }
}

// Konami Code
function initializeKonamiCode() {
    document.addEventListener('keydown', function(e) {
        konamiSequence.push(e.code);
        
        if (konamiSequence.length > konamiCode.length) {
            konamiSequence.shift();
        }
        
        if (konamiSequence.length === konamiCode.length) {
            if (konamiSequence.every((key, index) => key === konamiCode[index])) {
                triggerKonamiMode();
                konamiSequence = [];
            }
        }
    });
}

function triggerKonamiMode() {
    const modal = document.getElementById('konamiModal');
    if (modal) {
        modal.classList.remove('hidden');
        
        // Add retro effects
        document.body.style.filter = 'sepia(1) hue-rotate(320deg) saturate(2)';
        
        document.getElementById('closeKonami').addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.filter = '';
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.filter = '';
        }, 5000);
    }
}

// Ghost Navigation
function initializeGhostNavigation() {
    let mousePattern = [];
    
    document.addEventListener('mousemove', function(e) {
        // Track mouse movement pattern (simplified)
        const pattern = Math.floor(e.clientX / 100) + '-' + Math.floor(e.clientY / 100);
        mousePattern.push(pattern);
        
        if (mousePattern.length > 10) {
            mousePattern.shift();
        }
        
        // Secret pattern: move in a circle-like motion
        if (mousePattern.length === 10) {
            const uniquePatterns = [...new Set(mousePattern)];
            if (uniquePatterns.length >= 6) {
                showGhostNav();
                mousePattern = [];
            }
        }
    });
}

function showGhostNav() {
    const ghostNav = document.getElementById('ghostNav');
    if (ghostNav) {
        ghostNav.classList.remove('hidden');
        ghostNav.classList.add('show');
        
        setTimeout(() => {
            ghostNav.classList.add('hidden');
            ghostNav.classList.remove('show');
        }, 3000);
    }
}

// Chatbot
function initializeChatbot() {
    const chatbotPixel = document.getElementById('secretChatbotPixel');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendChatbot = document.getElementById('sendChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    if (chatbotPixel) {
        chatbotPixel.addEventListener('click', function() {
            chatbotModal.classList.remove('hidden');
            chatbotInput.focus();
        });
    }
    
    if (closeChatbot) {
        closeChatbot.addEventListener('click', function() {
            chatbotModal.classList.add('hidden');
        });
    }
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.textContent = message;
        chatbotMessages.appendChild(userMsg);
        
        // Add bot response
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'bot-message';
            
            // Generate response based on input
            let response = secretMessages.aiResponses[Math.floor(Math.random() * secretMessages.aiResponses.length)];
            
            if (message.toLowerCase().includes('project')) {
                response = "I can tell you about Anuj's projects! He's worked on healthcare apps, movie guides, dashboards, and network security. Each has hidden easter eggs!";
            } else if (message.toLowerCase().includes('secret')) {
                response = "🤫 There are over 30 secret interactions hidden in this portfolio! Try clicking on unexpected places, hovering repeatedly, or typing special commands!";
            } else if (message.toLowerCase().includes('skill')) {
                response = "Anuj specializes in React, UI/UX design, and data visualization. Fun fact: He learned to code by building games first!";
            }
            
            botMsg.textContent = response;
            chatbotMessages.appendChild(botMsg);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
        
        chatbotInput.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    if (sendChatbot) {
        sendChatbot.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Blur Trigger
function initializeBlurTrigger() {
    const blurTrigger = document.getElementById('blurTrigger');
    const aboutSection = document.getElementById('about');
    
    if (blurTrigger) {
        blurTrigger.addEventListener('click', function() {
            aboutSection.classList.toggle('bio-blur');
            showNotification('🌀 FOCUS MODE TOGGLED!', 'info');
        });
    }
}

// Dark Zone
function initializeDarkZone() {
    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const clientHeight = window.innerHeight;
        
        // Check if scrolled past bottom
        if (scrollTop + clientHeight >= scrollHeight + 100) {
            showDarkZone();
        }
    });
}

function showDarkZone() {
    const darkZone = document.getElementById('darkZone');
    if (darkZone && darkZone.classList.contains('hidden')) {
        darkZone.classList.remove('hidden');
        showNotification('🌌 Welcome to the Dark Zone...', 'info');
    }
}

// AI Assistant
function initializeAIAssistant() {
    const aiAssistant = document.getElementById('aiAssistant');
    const aiTooltip = document.getElementById('aiTooltip');
    
    if (aiAssistant) {
        const tips = [
            "💡 Tip: Try clicking the glitch icon!",
            "🎯 Hint: Look for the crosshair target!",
            "⌨️ Secret: Access the terminal with ▸_",
            "🎮 Easter egg: Try the Konami code!",
            "🎨 Pro tip: Hover skills repeatedly!",
            "📝 Hidden: Click the note icons on projects!",
            "🔊 Audio: Click speaker icons for tips!",
            "🌀 Focus: Click the tiny pixel to blur background!"
        ];
        
        let tipIndex = 0;
        
        aiAssistant.addEventListener('mouseenter', function() {
            aiTooltip.textContent = tips[tipIndex % tips.length];
            tipIndex++;
        });
        
        aiAssistant.addEventListener('click', function() {
            showNotification(tips[Math.floor(Math.random() * tips.length)], 'info');
        });
    }
}

// Cursor Trail
function initializeCursorTrail() {
    const canvas = document.getElementById('cursorTrail');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const trail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', function(e) {
        trail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        if (trail.length > maxTrailLength) {
            trail.shift();
        }
    });
    
    function animateTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < trail.length; i++) {
            const point = trail[i];
            const age = Date.now() - point.time;
            const opacity = Math.max(0, 1 - age / 1000);
            const size = Math.max(0, 5 - i * 0.2);
            
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 217, 255, ${opacity})`;
            ctx.fill();
            
            // Add sparks on click
            if (i === trail.length - 1 && sniperModeActive) {
                for (let j = 0; j < 5; j++) {
                    const sparkX = point.x + (Math.random() - 0.5) * 20;
                    const sparkY = point.y + (Math.random() - 0.5) * 20;
                    
                    ctx.beginPath();
                    ctx.arc(sparkX, sparkY, 1, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 0, 128, ${opacity})`;
                    ctx.fill();
                }
            }
        }
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// HUD Stats
function initializeHUD() {
    const uptimeCounter = document.getElementById('uptimeCounter');
    const visitorCount = document.getElementById('visitorCount');
    const energyLevel = document.getElementById('energyLevel');
    
    // Update uptime
    setInterval(() => {
        const uptime = Date.now() - visitStartTime;
        const hours = Math.floor(uptime / 3600000);
        const minutes = Math.floor((uptime % 3600000) / 60000);
        const seconds = Math.floor((uptime % 60000) / 1000);
        
        if (uptimeCounter) {
            uptimeCounter.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
    
    // Animate visitor count
    if (visitorCount) {
        let currentCount = 1337;
        setInterval(() => {
            currentCount += Math.floor(Math.random() * 3);
            visitorCount.textContent = currentCount.toLocaleString();
        }, 5000);
    }
    
    // Animate energy level
    if (energyLevel) {
        let energy = 85;
        setInterval(() => {
            energy += (Math.random() - 0.5) * 10;
            energy = Math.max(70, Math.min(100, energy));
            energyLevel.style.width = energy + '%';
        }, 2000);
    }
}

// Time-based triggers
function checkTimeBasedTriggers() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // 4:04 PM trigger
    if (hours === 16 && minutes === 4) {
        const timePopup = document.getElementById('timePopup');
        if (timePopup) {
            timePopup.classList.remove('hidden');
            setTimeout(() => {
                timePopup.classList.add('hidden');
            }, 5000);
        }
    }
    
    // Welcome audio after 5 seconds
    setTimeout(() => {
        const welcomeAudio = document.getElementById('welcomeAudio');
        if (welcomeAudio) {
            welcomeAudio.play().catch(() => {
                // Audio play failed (browser policy)
                console.log('Welcome audio blocked by browser');
            });
        }
    }, 5000);
}

// Voice command (experimental)
function initializeVoiceCommand() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        
        recognition.onresult = function(event) {
            const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
            
            if (command.includes('hey anuj')) {
                showNotification('🎤 Voice command detected!', 'success');
                // Could trigger chatbot or other actions
            }
        };
        
        // Start listening (with user permission)
        document.addEventListener('click', function() {
            recognition.start();
        }, { once: true });
    }
}

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const navDots = document.querySelectorAll('.nav-dot');
    const progressBar = document.querySelector('.progress-bar');
    
    // Scroll event handler
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 100;
        nav.classList.toggle('scrolled', scrolled);
        
        // Update progress bar
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / maxScroll) * 100;
        progressBar.style.width = Math.min(100, progress) + '%';
        
        // Update active section
        updateActiveSection();
    });
    
    // Add click handlers for nav links and dots
    [...navLinks, ...navDots].forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section || this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
}

// Update active navigation items based on scroll position
function updateActiveSection() {
    const sections = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
    let activeSection = 'hero';
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection = sectionId;
            }
        }
    });
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === activeSection);
    });
    
    // Update nav dots
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.toggle('active', dot.dataset.section === activeSection);
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        isScrolling = true;
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}

// Typewriter effect
function initializeTypewriter() {
    const typewriter = document.getElementById('typewriter');
    const text = "Crafting seamless digital experiences with cyber-precision.";
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            typewriter.textContent = text.slice(0, i + 1);
            i++;
            setTimeout(typeChar, 100);
        }
    }
    
    // Start typewriter after a short delay
    setTimeout(typeChar, 1000);
}

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 1000);
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    document.querySelectorAll('[data-delay]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate progress bars when they come into view
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                if (progressFill) {
                    progressFill.style.width = progressFill.parentElement.dataset.width || '85%';
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.progress-bar-skill').forEach(el => {
        progressObserver.observe(el);
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Parallax effects for background elements
    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.circuit-bg, .animated-grid');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Create floating particles
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (3 + Math.random() * 2) + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Add floating particles to contact section
    const contactBg = document.querySelector('.contact-bg');
    if (contactBg) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (3 + Math.random() * 2) + 's';
            particle.style.opacity = '0.4';
            
            contactBg.appendChild(particle);
        }
    }
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        showNotification('Message transmitted successfully!', 'success');
        
        // Reset form
        form.reset();
    });
    
    // Add focus effects to form inputs
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenu) return;
    
    mobileMenu.addEventListener('click', function() {
        // Toggle mobile menu (you can expand this for a proper mobile menu)
        console.log('Mobile menu clicked');
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--glass-bg);
        border: 1px solid var(--neon-${type === 'success' ? 'green' : type === 'info' ? 'blue' : 'pink'});
        backdrop-filter: blur(10px);
        color: var(--neon-${type === 'success' ? 'green' : type === 'info' ? 'blue' : 'pink'});
        padding: 1rem 2rem;
        border-radius: 8px;
        font-family: 'Orbitron', monospace;
        font-weight: 500;
        z-index: 10001;
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
        transition: all 0.3s ease;
        text-align: center;
        min-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    // Add subtle mouse tracking effects
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Add keyboard shortcuts for navigation
    if (e.altKey) {
        switch(e.key) {
            case '1':
                scrollToSection('hero');
                break;
            case '2':
                scrollToSection('about');
                break;
            case '3':
                scrollToSection('skills');
                break;
            case '4':
                scrollToSection('projects');
                break;
            case '5':
                scrollToSection('services');
                break;
            case '6':
                scrollToSection('contact');
                break;
        }
    }
});

// Add window resize handler
window.addEventListener('resize', debounce(function() {
    // Handle responsive adjustments
    updateActiveSection();
    
    // Update cursor trail canvas
    const canvas = document.getElementById('cursorTrail');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}, 250));

// Console messages for developers
console.log('%c🔓 DEVELOPER DETECTED!', 'color:hsl(189, 100.00%, 50.00%); font-size: 20px; font-weight: bold;');
console.log('%cWelcome to Anuj\'s Neural Network! 🧠', 'color: #FF0080; font-size: 14px;');
console.log('%c30+ secret interactions are hidden in this portfolio...', 'color: #00FF88; font-size: 12px;');
console.log('%cCan you find them all? 🕵️‍♀️', 'color: #FFD700; font-size: 12px;');
console.log('%cHint: Try the Konami code... ↑↑↓↓←→←→BA', 'color: #8B00FF; font-size: 10px;');
