// AGRO-BIO SORB Compact SIH Showcase Interactive Application Script
// Universally compatible with both file:/// and http:// dev servers

(function () {
  if (window.agroBioSorbLoaded) return;
  window.agroBioSorbLoaded = true;
  'use strict';

  // --- RICH SCIENTIFIC DETAILS REPOSITORY FOR PROGRESSIVE DISCLOSURE ---
  const projectDetails = {
    // Snapshots
    'snapshot-bio': {
      tag: 'Materials Science & Chelation',
      title: 'Bio-Adsorptive Matrix Engineering',
      desc: 'Agricultural biomass residues undergo controlled oxygen-limited pyrolysis (450°C–550°C) and chemical activation, yielding a high-surface-area porous carbon matrix (>980 m²/g). Abundant functional groups chemically coordinate and sequester toxic divalent cations (Lead, Cadmium, Arsenic) and synthetic azo dyes.',
      specs: [
        { key: 'Precursor', val: 'Agricultural biomass crop residues' },
        { key: 'Surface Area', val: '980 – 1,250 m²/g (BET measured)' },
        { key: 'Target Analytes', val: 'Pb²⁺, Cd²⁺, As³⁺, turbidity, azo dyes' },
        { key: 'Regeneration', val: 'Dilute acid desorption (>88% recovery)' }
      ]
    },
    'snapshot-monitoring': {
      tag: 'IoT Telemetry & Sensing',
      title: 'Smart Real-Time Quality Sensing',
      desc: 'Inline multi-parameter flow-cell sensor suite continuously monitors hydrogen-ion potential (pH), nephelometric turbidity (NTU), electrical conductivity, and total dissolved solids (TDS ppm) with sub-second sample rates.',
      specs: [
        { key: 'Optical Probe', val: '850nm IR nephelometric scattering' },
        { key: 'Electrode Core', val: 'Industrial gel-filled glass pH probe' },
        { key: 'Ionic Meter', val: 'Titanium dual-pin conductivity sensor' },
        { key: 'Sample Rate', val: 'Continuous 1.0 Hz ADC acquisition' }
      ]
    },
    'snapshot-modular': {
      tag: 'Systems Engineering',
      title: 'Modular Multi-Stage Architecture',
      desc: 'Compact vertical cylindrical acrylic packed columns feature stratified media beds: quartz silica sediment trap, clinoptilolite zeolite cation exchanger, and functionalized agricultural biochar granules.',
      specs: [
        { key: 'Column Geometry', val: '100mm Ø x 600mm Packed Acrylic' },
        { key: 'Flow Velocity', val: '0.5 – 3.5 L/min calibrated laminar' },
        { key: 'Form Factor', val: 'Decentralized modular bench/skid unit' },
        { key: 'Pressure Head', val: 'Gravity-fed or low-power peristaltic' }
      ]
    },
    'snapshot-iot': {
      tag: 'Edge Computing',
      title: 'Edge Microcontroller & Wireless Gateway',
      desc: 'ESP32 dual-core microcontroller runs localized thresholding algorithms against WHO potable criteria, logging data over MQTT/Wi-Fi and triggering a motorized solenoid diverter valve to safeguard clean water storage.',
      specs: [
        { key: 'Controller Core', val: 'ESP32-WROOM-32 Dual Core 240MHz' },
        { key: 'ADC Converter', val: 'ADS1115 16-Bit I2C low-noise converter' },
        { key: 'Safety Gating', val: '12V DC rapid-response solenoid valve' },
        { key: 'Protocol', val: 'MQTT / HTTP REST / BLE diagnostic' }
      ]
    },

    // Faculty Mentor
    'mentor-role': {
      tag: 'SIH Project Mentor & Guide',
      title: 'Mr. K. MUTHUSAMY',
      desc: 'Guiding multidisciplinary innovation, competitive problem formulation, and technology validation for national hackathons and sustainable clean-water environmental engineering at Rathinam Technical Campus.',
      specs: [
        { key: 'Designation', val: 'Technical Competitions Head' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Domain', val: 'Sustainable Environmental Engineering' },
        { key: 'Mentorship', val: 'SIH Innovation Project Formulation' }
      ]
    },

    // Student Members
    'team-pandirajha': {
      tag: 'Team Leader & System Architect',
      title: 'PANDIRAJHA T',
      desc: 'Architects end-to-end system integration, packed-bed hydraulics, and multidisciplinary coordination across chemical synthesis, IoT embedded telemetry, and competitive hackathon deliverables.',
      specs: [
        { key: 'Role', val: 'Team Leader & System Architect' },
        { key: 'Academic Year', val: '3rd Year • Core Project Lead' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Specialization', val: 'System Architecture & Filtration Skids' }
      ]
    },
    'team-harivamsee': {
      tag: 'ECE & IoT Hardware Lead',
      title: 'HARI VAMSEE P',
      desc: 'Engineers circuit schematics, 16-bit analog signal conditioning, sensor probe calibration, PCB layout, and optocoupler relay actuation for closed-loop solenoid valve gating.',
      specs: [
        { key: 'Role', val: 'ECE & IoT Hardware Lead' },
        { key: 'Academic Year', val: 'ECE • 2nd Year' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Area', val: 'Embedded Hardware & Sensor Telemetry' }
      ]
    },
    'team-nandhakumar': {
      tag: 'CSE & Telemetry Dashboard Lead',
      title: 'NANDHA KUMAR S',
      desc: 'Develops real-time MQTT telemetry pipelines, edge decision thresholds, cloud logging dashboards, and responsive diagnostic interfaces for field monitoring operators.',
      specs: [
        { key: 'Role', val: 'CSE & Telemetry Dashboard Lead' },
        { key: 'Academic Year', val: 'CSE • 2nd Year' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Area', val: 'Web UI, MQTT Pipelines & Edge Logic' }
      ]
    },
    'team-srinithi': {
      tag: 'Bio-Adsorbent Synthesis Lead',
      title: 'SRINITHI R',
      desc: 'Leads agricultural biomass carbonization, chemical activation protocols, and functionalized chitosan polymer crosslinking to maximize heavy metal chelation capacity.',
      specs: [
        { key: 'Role', val: 'Bio-Adsorbent Synthesis Lead' },
        { key: 'Academic Year', val: 'Environmental Chemistry • 3rd Year' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Area', val: 'Surface Functionalization & Biochar' }
      ]
    },
    'team-afrin': {
      tag: 'Water Testing & Analysis Lead',
      title: 'AFRIN SULTHANA T',
      desc: 'Oversees analytical spectrophotometry, adsorption isotherms (Langmuir/Freundlich), breakthrough curve modeling, and analytical characterization of purified effluent.',
      specs: [
        { key: 'Role', val: 'Water Testing & Analysis Lead' },
        { key: 'Academic Year', val: 'Biomaterials & Analytics • 3rd Year' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Area', val: 'Water Quality Analysis & Kinetics' }
      ]
    },
    'team-gokul': {
      tag: 'Filtration Column Fabrication Lead',
      title: 'GOKUL P',
      desc: 'Designs mechanical column framing, fluid distributor manifolds, stratified bed retention meshes, and rapid-connect modular plumbing for low-head-loss gravity flow.',
      specs: [
        { key: 'Role', val: 'Filtration Column Fabrication Lead' },
        { key: 'Academic Year', val: 'Mechanical & Prototyping • 3rd Year' },
        { key: 'Institution', val: 'Rathinam Technical Campus' },
        { key: 'Focus Area', val: 'Fluidic Manifolds & Column CAD' }
      ]
    },

    // Crisis Cards
    'crisis-contaminated': {
      tag: 'Water Crisis Pillar 01',
      title: 'Contaminated Raw Water Infiltration',
      desc: 'Surface rivers and rural community groundwater reservoirs suffer from untreated wastewater discharge, agricultural fertilizer leaching, and suspended silt that endanger local drinking safety.',
      specs: [
        { key: 'Prevalence', val: 'Over 2.2 billion lack safely managed water' },
        { key: 'Physical Risk', val: 'High colloidal turbidity & microbial growth' },
        { key: 'Remediation', val: 'Multi-barrier mechanical pre-filtration' }
      ]
    },
    'crisis-metals': {
      tag: 'Water Crisis Pillar 02',
      title: 'Heavy Metals & Toxic Synthetic Dyes',
      desc: 'Persistent inorganic ions like Lead (Pb²⁺), Cadmium (Cd²⁺), and industrial azo dyes resist conventional biological breakdown, bioaccumulating in human tissue and causing chronic organ toxicity.',
      specs: [
        { key: 'Key Pollutants', val: 'Lead, Cadmium, Arsenic, textile dyes' },
        { key: 'Challenge', val: 'High bond energy, ionic persistence' },
        { key: 'Remediation', val: 'Surface chelation via biochar & chitosan' }
      ]
    },
    'crisis-monitoring': {
      tag: 'Water Crisis Pillar 03',
      title: 'Absence of Real-Time Quality Visibility',
      desc: 'Most rural and semi-urban water treatment plants rely on intermittent manual testing with days of delay. Saturated filter beds breakthrough undetected, exposing consumers to contaminated drinking water.',
      specs: [
        { key: 'Current Gap', val: 'Delayed manual grab-sample testing' },
        { key: 'Consequence', val: 'Undetected filter breakthrough' },
        { key: 'Remediation', val: 'In-line continuous optical & EC sensing' }
      ]
    },
    'crisis-accessibility': {
      tag: 'Water Crisis Pillar 04',
      title: 'Prohibitive Cost & High Brine Waste',
      desc: 'Commercial Reverse Osmosis (RO) membranes reject up to 70% of intake water as concentrated brine and require high grid power, making them economically impractical for decentralized rural deployment.',
      specs: [
        { key: 'RO Brine Loss', val: '50% – 70% intake water wasted' },
        { key: 'Energy Footprint', val: 'High pumping pressure required' },
        { key: 'Remediation', val: 'Zero-brine gravity-assisted bio-sorption' }
      ]
    },

    // Solution Cards
    'solution-bio': {
      tag: 'Solution Core 01',
      title: 'Engineered Bio-Adsorptive Media',
      desc: 'Combines slow-pyrolyzed agricultural biochar with crosslinked chitosan beads, establishing a porous dual-network matrix that captures both non-polar organic molecules and heavy metal divalent cations.',
      specs: [
        { key: 'Active Mechanism', val: 'Pore diffusion + functional chelation' },
        { key: 'Capacity', val: 'Target 180–240 mg/g adsorption uptake' },
        { key: 'Circularity', val: '100% upcycled agricultural crop residues' }
      ]
    },
    'solution-filtration': {
      tag: 'Solution Core 02',
      title: 'Compact Multi-Stage Filtration',
      desc: 'A modular column assembly incorporating graded quartz sand, natural zeolite cation exchangers, and bio-sorbent granules creates stratified hydrodynamic flow with zero toxic chemical coagulant sludge.',
      specs: [
        { key: 'Stages', val: 'Pre-filter → Bio-sorption → Zeolite ion exchange' },
        { key: 'Footprint', val: 'Compact modular bench/skid unit' },
        { key: 'Waste', val: 'Zero toxic chemical coagulant sludge' }
      ]
    },
    'solution-monitoring': {
      tag: 'Solution Core 03',
      title: 'Autonomous Real-Time Gating',
      desc: 'Inline optical nephelometry and electrochemical probes feed continuous stream quality to an ESP32 microcontroller, actuating a 12V motorized solenoid valve to release only certified potable water.',
    },

    // Prototype Architecture Subsystem Components (From Engineering Schematic)
    'proto-solar': {
      tag: 'Renewable Power System',
      title: 'Solar PV Array (20W–50W)',
      avatar: '☀️',
      role: 'Harvests renewable solar radiation to deliver autonomous off-grid electrical energy.',
      desc: 'Monocrystalline photovoltaic solar panel generates 18V–21V DC under ambient sunlight. Provides continuous power for water pumping, germicidal UV disinfection, and ESP32 IoT telemetry with zero dependence on traditional fossil fuels or rural electrical grids.',
      specs: [
        { key: 'Power Rating', val: '20W – 50W Monocrystalline PV' },
        { key: 'Operating Voltage', val: '18V – 21.6V Voc / 12V Nominal' },
        { key: 'Application', val: '100% Off-grid rural & agricultural operation' },
        { key: 'Carbon Footprint', val: 'Net Zero Operational Carbon Emissions' }
      ]
    },
    'proto-controller': {
      tag: 'Power Management',
      title: 'Solar Charge Controller (12.6V PWM/MPPT)',
      avatar: '⚡',
      role: 'Manages solar power conversion, battery charging cycles, and load protection.',
      desc: 'Smart charge regulator actively modulates charging current to protect the 12V battery against overcharging, deep discharge, short circuit, and reverse current leakage during nighttime. Includes digital LCD telemetry showing 12.6V bus voltage.',
      specs: [
        { key: 'Topology', val: 'Intelligent PWM / MPPT regulation' },
        { key: 'Battery Bus', val: '12.0V – 12.6V float charge voltage' },
        { key: 'Telemetry Display', val: 'Backlit LCD with real-time V/A readouts' },
        { key: 'Protection', val: 'Overcharge, reverse polarity & deep discharge cutoff' }
      ]
    },
    'proto-battery': {
      tag: 'Energy Storage',
      title: '12V Rechargeable Battery Bank',
      avatar: '🔋',
      role: 'Stores electrical energy for uninterrupted 24/7 continuous water filtration and nighttime monitoring.',
      desc: 'Deep-cycle rechargeable battery buffer provides reliable DC power to the pump, UV ballast, and sensors during cloudy conditions and nighttime, ensuring uninterrupted clean water availability.',
      specs: [
        { key: 'Nominal Voltage', val: '12V DC Deep-Cycle' },
        { key: 'Autonomy', val: 'Up to 14–18 hours continuous operation' },
        { key: 'Load Supply', val: 'Powers 12V Pump, UV lamp & ESP32 subsystem' },
        { key: 'Cycle Life', val: '>1,200 charge/discharge cycles' }
      ]
    },
    'proto-buck': {
      tag: 'Voltage Regulation',
      title: 'DC-DC Buck Converter (5V / 12V Dual Rail)',
      avatar: '🔌',
      role: 'Steps down 12V battery power into a clean, noise-isolated 5V / 3.3V rail for the ESP32 and sensor logic.',
      desc: 'High-efficiency switching regulator converting variable 12V DC battery bus to ultra-stable 5.0V DC with low ripple (<20mV) to power the ESP32 controller, 16-bit analog-to-digital converter, and precision optical sensor probes.',
      specs: [
        { key: 'Input Range', val: '9V – 16V DC' },
        { key: 'Output Rail', val: 'Regulated 5.0V / 3.3V DC (2.0A max)' },
        { key: 'Efficiency', val: '>92% step-down conversion' },
        { key: 'Noise Filtering', val: 'LC filter for ultra-clean analog sensor readings' }
      ]
    },
    'proto-inlet': {
      tag: 'Influent Feed Stage',
      title: 'Polluted Water Inlet Tank',
      avatar: '🟤',
      role: 'Reservoir for raw, untreated wastewater, turbid runoff, or contaminated river water.',
      desc: 'Receives raw intake water containing suspended solids, agricultural fertilizer run-off, heavy metals, industrial azo dyes, and microbial pathogens. Equipped with a preliminary coarse strainer to intercept macro-debris.',
      specs: [
        { key: 'Feed Source', val: 'Agricultural runoff, lake/canal, or industrial effluent' },
        { key: 'Initial Turbidity', val: 'Typically 45 – 180+ NTU' },
        { key: 'Initial TDS', val: '400 – 900+ ppm' },
        { key: 'Containment', val: 'Corrosion-resistant UV-stabilized reservoir' }
      ]
    },
    'proto-inlet-tds': {
      tag: 'Baseline Analytical Sensing',
      title: 'Inlet TDS Sensor Probe',
      avatar: '🧪',
      role: 'Measures initial Total Dissolved Solids (TDS) and electrical conductivity before treatment.',
      desc: 'Submersible dual-pin titanium electrode probe continuously measures incoming water conductivity, establishing a baseline to benchmark the exact salt, ion, and pollutant reduction efficiency across the filtration skid.',
      specs: [
        { key: 'Probe Material', val: 'Corrosion-resistant dual titanium pins' },
        { key: 'Measurement Range', val: '0 – 1,000+ ppm (±2% F.S.)' },
        { key: 'Signal Output', val: '0 – 2.3V analog conditioned signal' },
        { key: 'Purpose', val: 'Real-time baseline pollutant indexing' }
      ]
    },
    'proto-pump': {
      tag: 'Hydraulic Actuation',
      title: '12V DC Water Pump',
      avatar: '⚙️',
      role: 'Draws raw water and propels it with steady hydraulic pressure through the filtration stages.',
      desc: 'Energy-efficient 12V DC pump providing continuous, pulse-free laminar inflow through the primary sediment bed and secondary bio-adsorptive column without requiring high-pressure grid supplies.',
      specs: [
        { key: 'Operating Voltage', val: '12V DC (Powered directly by solar/battery bus)' },
        { key: 'Flow Delivery', val: '0.8 – 2.5 Liters/min calibrated laminar rate' },
        { key: 'Power Draw', val: '10W – 15W high-efficiency low-power motor' },
        { key: 'Feature', val: 'Self-priming with automated dry-run protection' }
      ]
    },
    'proto-primary': {
      tag: 'Stage 01: Physical Clarification',
      title: 'Primary Filter (Mesh, Gravel & Sand Column)',
      avatar: '🪨',
      role: 'Performs multi-barrier mechanical clarification to remove coarse sediment, grit, and suspended matter.',
      desc: 'Vertical packed column containing stratified physical media beds. Water enters from the top, passing through multiple mesh screens to trap floating debris, coarse gravel to dissipate turbulence, and fine silica sand to trap suspended silt and colloids, reducing turbidity by up to 75% before bio-sorption.',
      specs: [
        { key: 'Layer 1 (Top)', val: 'Multiple stainless steel micro-mesh screens' },
        { key: 'Layer 2 (Middle)', val: 'Graded washed gravel bed (3mm – 6mm)' },
        { key: 'Layer 3 (Bottom)', val: 'Dense silica sand (0.5mm – 1.2mm grain size)' },
        { key: 'Primary Function', val: 'Removes coarse turbidity, silt, and suspended particulates' }
      ]
    },
    'proto-secondary': {
      tag: 'Stage 02: Advanced Bio-Adsorption',
      title: 'Secondary Bio-Filter (Banana Pseudostem + B. subtilis, Rice Husk & RO)',
      avatar: '🌿',
      role: 'Bio-chemically captures toxic heavy metals, synthetic dyes, pesticides, and micropollutants.',
      desc: 'The core innovation of the AGRO-BIO SORB system. Combines functionalized banana pseudostem biomass augmented with a beneficial Bacillus subtilis bacterial biofilm to biosorb divalent heavy metals (Lead, Cadmium, Arsenic) and biodegrade organic pollutants. Backed by pyrolyzed rice husk biochar providing dense microporous carbon adsorption (>950 m²/g) to capture toxic dyes, and a polyamide RO membrane polishing layer to eliminate remaining dissolved ions.',
      specs: [
        { key: 'Bio-Layer 1', val: 'Banana pseudostem impregnated with Bacillus subtilis biofilm' },
        { key: 'Bio-Layer 2', val: 'Rice husk biochar with high-surface-area porous carbon matrix' },
        { key: 'Membrane Layer', val: 'Polyamide thin-film RO membrane barrier' },
        { key: 'Mechanisms', val: 'Bioremediation + Surface chelation + Pore adsorption' },
        { key: 'Separation Mesh', val: 'Internal nylon support mesh between active media zones' }
      ]
    },
    'proto-uv': {
      tag: 'Stage 03: Biological Sterilization',
      title: 'Germicidal UV Disinfection Chamber',
      avatar: '💡',
      role: 'Eradicates 99.99% of bacteria, viruses, and pathogens via high-intensity UVC radiation.',
      desc: 'Stainless steel cylindrical flow chamber enclosing a high-intensity 254 nm germicidal ultraviolet (UV-C) lamp inside a quartz sleeve. Ultraviolet photons penetrate bacterial cell walls and photochemically scramble the DNA/RNA of E. coli, coliform bacteria, and pathogens without using chlorine chemicals.',
      specs: [
        { key: 'Wavelength', val: '254 nm Germicidal Ultraviolet (UV-C)' },
        { key: 'Kill Rate', val: '>99.99% pathogen & E. coli sterilization' },
        { key: 'Disinfection Type', val: '100% Chemical-free physical photochemical sterilization' },
        { key: 'Chamber Material', val: 'Food-grade 304 stainless steel with quartz sleeve' }
      ]
    },
    'proto-outlet-tds': {
      tag: 'Final Permeate Verification',
      title: 'Outlet TDS Sensor Probe',
      avatar: '🔬',
      role: 'Continuously validates that the treated effluent meets potable drinking water standards.',
      desc: 'Precision titanium probe placed downstream of the UV disinfection chamber. Measures purified water mineral content and ionic purity in real time. If TDS exceeds permissible potable limits (>300 ppm) or breakthrough occurs, the ESP32 safety logic triggers an alert and halts distribution.',
      specs: [
        { key: 'Permeate Target', val: '50 – 150 ppm (Pristine drinking range)' },
        { key: 'WHO Potable Limit', val: '< 300 ppm recommended drinking standard' },
        { key: 'Precision', val: '±1 ppm resolution with temperature compensation' },
        { key: 'Safety Action', val: 'Triggers diverter valve if quality deviates' }
      ]
    },
    'proto-esp32': {
      tag: 'Central Edge Computing',
      title: 'ESP32 IoT Controller & Transducer Array',
      avatar: '📟',
      role: 'Brain of the prototype: acquires multi-sensor signals, runs WHO safety gating logic, and streams live data.',
      desc: 'Dual-core 240MHz ESP32 microcontroller interfaced with a multi-channel sensor array including pH, dual Turbidity (pre/post), Piezo Pressure, DS18B20 Temperature, dual TDS, and Hall Flow meter. Computes Water Quality Index (WQI) every second, drives the solenoid safety valve, and broadcasts live MQTT telemetry over Wi-Fi.',
      specs: [
        { key: 'Microcontroller', val: 'ESP32-WROOM-32 (Dual Core 32-bit 240MHz, Wi-Fi/BLE)' },
        { key: 'Analog Converter', val: 'ADS1115 16-Bit I2C low-noise ADC' },
        { key: 'Monitored Sensors', val: 'pH, 2x Turbidity, Pressure, Temp, 2x TDS, Flow meter' },
        { key: 'Control Output', val: 'Optocoupler relay for 12V motorized solenoid safety gating' }
      ]
    },
    'proto-dashboard': {
      tag: 'Wireless Telemetry',
      title: 'IoT Telemetry Dashboard (Web & Mobile)',
      avatar: '📱',
      role: 'Provides real-time cloud and mobile visualization of all water quality metrics and system status.',
      desc: 'Responsive web and mobile interface accessible to farmers, plant operators, and health inspectors anywhere. Visualizes live stream parameters (pH: 7.2, Turbidity: 0.8 NTU, TDS: 120 ppm, Temp: 26.5°C, Flow: 1.2 L/min), system operating state, battery charge %, and historical breakthrough curves.',
      specs: [
        { key: 'Connectivity', val: 'Wi-Fi 802.11 b/g/n & MQTT cloud broker' },
        { key: 'Live Readouts', val: 'pH (7.2), Turbidity (0.8 NTU), TDS (120 ppm), Temp, Flow' },
        { key: 'Alert System', val: 'Instant mobile notifications on filter saturation or quality drop' },
        { key: 'Access', val: 'Any smartphone, tablet, or desktop web browser' }
      ]
    },
    'proto-outlet': {
      tag: 'Clean Output Reservoir',
      title: 'Treated Potable Water Output',
      avatar: '💧',
      role: 'Collects pristine, certified, bacteria-free clean water ready for safe community consumption.',
      desc: 'Sanitary food-grade storage vessel collecting purified effluent that has passed through sedimentation, agricultural bio-adsorption, membrane polishing, and UVC sterilization. Transparent crystal-clear water meeting all WHO drinking guidelines.',
      specs: [
        { key: 'Water Quality', val: 'Certified WHO Potable Standard compliant' },
        { key: 'Turbidity Output', val: '< 1.0 NTU (Target 0.8 NTU - crystal clear)' },
        { key: 'Microbial Count', val: '0 CFU/100mL (E. coli & pathogen free)' },
        { key: 'Output Flow', val: 'Continuous 1.0 – 2.0 L/min gravity / pump collection' }
      ]
    }
  };

  // --- APPLICATION INITIALIZATION ---
  function initApp() {
    // 1. MODAL / PROGRESSIVE DISCLOSURE SYSTEM
    const modalBackdrop = document.getElementById('detail-modal');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalSpecs = document.getElementById('modal-specs');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openModal(detailKey) {
      const data = projectDetails[detailKey];
      if (!data || !modalBackdrop) return;

      if (modalTag) modalTag.textContent = data.tag || 'Project Details';
      if (modalTitle) modalTitle.textContent = data.title || 'AGRO-BIO SORB';
      if (modalDesc) modalDesc.textContent = data.desc || '';

      if (modalSpecs) {
        if (data.specs && data.specs.length) {
          modalSpecs.innerHTML = data.specs.map(s => `
            <div class="modal-spec-row">
              <span class="modal-spec-key">${s.key}:</span>
              <span class="modal-spec-val">${s.val}</span>
            </div>
          `).join('');
          modalSpecs.style.display = 'flex';
        } else {
          modalSpecs.innerHTML = '';
          modalSpecs.style.display = 'none';
        }
      }

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (!modalBackdrop) return;
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Attach click listeners to all elements with data-detail
    document.querySelectorAll('[data-detail]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(el.dataset.detail);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }

    // 1B. PROTOTYPE INTERACTIVE SCHEMATIC & COMPONENT INSPECTOR
    const protoComponentKeys = [
      'proto-inlet',
      'proto-inlet-tds',
      'proto-pump',
      'proto-primary',
      'proto-secondary',
      'proto-uv',
      'proto-outlet-tds',
      'proto-outlet',
      'proto-solar',
      'proto-controller',
      'proto-battery',
      'proto-buck',
      'proto-esp32',
      'proto-dashboard'
    ];
    let currentProtoIndex = 4; // Start with 'proto-secondary' (core bio-adsorption column)

    const inspectorTag = document.getElementById('inspector-tag');
    const inspectorAvatar = document.getElementById('inspector-avatar');
    const inspectorTitle = document.getElementById('inspector-title');
    const inspectorRole = document.getElementById('inspector-role');
    const inspectorDesc = document.getElementById('inspector-desc');
    const inspectorSpecs = document.getElementById('inspector-specs');
    const btnInspectorDeepdive = document.getElementById('btn-inspector-deepdive');
    const btnInspectorPrev = document.getElementById('btn-inspector-prev');
    const btnInspectorNext = document.getElementById('btn-inspector-next');
    const protoInspectorCard = document.getElementById('proto-inspector');

    function updateInspector(componentKey, smoothScroll = false) {
      const data = projectDetails[componentKey];
      if (!data) return;

      const idx = protoComponentKeys.indexOf(componentKey);
      if (idx !== -1) currentProtoIndex = idx;

      // Update Active Hotspots
      document.querySelectorAll('.proto-hotspot').forEach(btn => {
        const isMatch = btn.getAttribute('data-component') === componentKey;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      });

      // Update Active Directory Cards
      document.querySelectorAll('.proto-card-item').forEach(card => {
        const isMatch = card.getAttribute('data-component') === componentKey;
        card.classList.toggle('active', isMatch);
      });

      // Update Inspector UI with gentle pulse
      if (protoInspectorCard) {
        protoInspectorCard.classList.remove('inspector-updating');
        void protoInspectorCard.offsetWidth; // trigger reflow
        protoInspectorCard.classList.add('inspector-updating');
      }

      if (inspectorTag) inspectorTag.textContent = data.tag || 'System Component';
      if (inspectorAvatar) inspectorAvatar.textContent = data.avatar || '💧';
      if (inspectorTitle) inspectorTitle.textContent = data.title || 'Component';
      if (inspectorRole) inspectorRole.textContent = data.role || '';
      if (inspectorDesc) inspectorDesc.textContent = data.desc || '';

      if (inspectorSpecs) {
        if (data.specs && data.specs.length) {
          inspectorSpecs.innerHTML = data.specs.map(s => `
            <div class="inspector-spec-box">
              <span class="spec-label">${s.key}</span>
              <span class="spec-value">${s.val}</span>
            </div>
          `).join('');
        } else {
          inspectorSpecs.innerHTML = '';
        }
      }

      if (smoothScroll && protoInspectorCard && window.innerWidth <= 768) {
        protoInspectorCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Attach click listeners to hotspots
    document.querySelectorAll('.proto-hotspot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-component');
        if (key) updateInspector(key, true);
      });
    });

    // Attach click listeners to directory cards
    document.querySelectorAll('.proto-card-item').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const key = card.getAttribute('data-component');
        if (key) updateInspector(key, true);
      });
    });

    // Deep dive modal button
    if (btnInspectorDeepdive) {
      btnInspectorDeepdive.addEventListener('click', (e) => {
        e.preventDefault();
        const currentKey = protoComponentKeys[currentProtoIndex] || 'proto-secondary';
        openModal(currentKey);
      });
    }

    // Prev & Next navigation
    if (btnInspectorPrev) {
      btnInspectorPrev.addEventListener('click', () => {
        currentProtoIndex = (currentProtoIndex - 1 + protoComponentKeys.length) % protoComponentKeys.length;
        updateInspector(protoComponentKeys[currentProtoIndex], false);
      });
    }

    if (btnInspectorNext) {
      btnInspectorNext.addEventListener('click', () => {
        currentProtoIndex = (currentProtoIndex + 1) % protoComponentKeys.length;
        updateInspector(protoComponentKeys[currentProtoIndex], false);
      });
    }

    // Filter subsystem category tabs if present
    document.querySelectorAll('.proto-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.proto-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.proto-card-item').forEach(card => {
          if (filter === 'all' || card.getAttribute('data-group') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Initial load for inspector
    updateInspector(protoComponentKeys[currentProtoIndex], false);

    // 2. REAL-TIME MONITORING SIMULATION
    const turbiditySlider = document.getElementById('moisture-slider') || document.getElementById('turbidity-slider');
    const turbidityValText = document.getElementById('metric-moisture-val') || document.getElementById('metric-turbidity-val');
    const sliderReadout = document.getElementById('slider-readout');
    const valveStatusEl = document.getElementById('metric-pump-status') || document.getElementById('metric-valve-status');
    const phValText = document.getElementById('metric-temp-val') || document.getElementById('metric-ph-val');
    const tdsValText = document.getElementById('metric-humidity-val') || document.getElementById('metric-tds-val');
    const openDashboardBtn = document.getElementById('btn-open-dashboard');

    if (turbiditySlider && turbidityValText && valveStatusEl) {
      let currentTurbidity = 0.8;
      const POTABLE_THRESHOLD = 5.0; // In NTU for simulation

      function updateWaterQuality() {
        const isPotable = currentTurbidity < POTABLE_THRESHOLD;
        if (isPotable) {
          valveStatusEl.textContent = 'VALVE OPEN: CLEAN WATER';
          valveStatusEl.style.color = '#22D3EE';
          valveStatusEl.style.borderColor = '#22D3EE';
          if (tdsValText) {
            tdsValText.textContent = Math.round(135 + currentTurbidity * 8);
          }
          if (phValText) {
            phValText.textContent = (7.22 + (currentTurbidity * 0.03)).toFixed(2);
          }
        } else {
          valveStatusEl.textContent = 'VALVE DIVERTED: CONTAMINATED';
          valveStatusEl.style.color = '#FDA4AF';
          valveStatusEl.style.borderColor = '#FDA4AF';
          if (tdsValText) {
            tdsValText.textContent = Math.round(180 + currentTurbidity * 12);
          }
          if (phValText) {
            phValText.textContent = (7.65 + (currentTurbidity * 0.05)).toFixed(2);
          }
        }
      }

      turbiditySlider.addEventListener('input', (e) => {
        currentTurbidity = parseFloat(e.target.value);
        turbidityValText.textContent = currentTurbidity.toFixed(1);
        if (sliderReadout) {
          sliderReadout.textContent = `${currentTurbidity.toFixed(1)} NTU`;
        }
        updateWaterQuality();
      });

      // Natural sensor micro-fluctuations
      setInterval(() => {
        if (currentTurbidity < POTABLE_THRESHOLD) {
          if (phValText) phValText.textContent = (7.20 + Math.random() * 0.08).toFixed(2);
          if (tdsValText) tdsValText.textContent = Math.round(140 + Math.random() * 6);
        }
      }, 3500);

      updateWaterQuality();
    }

    if (openDashboardBtn) {
      openDashboardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('tech-sensor');
      });
    }

    // 3. SCROLL PROGRESS & NAVBAR
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      if (progressBar) progressBar.style.width = `${pct}%`;

      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', window.scrollY > 400);
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 4. MOBILE DRAWER
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
