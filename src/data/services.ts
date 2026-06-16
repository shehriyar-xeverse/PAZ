import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'vaccines-&-immunizations',
    title: 'Vaccines & Immunizations',
    description: 'Bespoke, proactive, and lifestyle-tailored immunization guidelines to secure lifelong immunity for your pets.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632826/C0F59FD3-A6CA-484D-9127-A08C04880335-square-fb8fd5ad7a5cce249a0d9f4754f581db-xrq47z85h9ks_dp5bwc.jpg',
    overview: 'Immunizations are the cornerstone of proactive preventative pet healthcare. At PAZ, we reject cookie-cutter vaccination schedules. Instead, we customize vaccine lines to match your pet’s exact age, weight, genetics, and exposure risks in the Austin environment.',
    benefits: [
      'Shields pets against fatal micro-organisms and common community pathogens',
      'Minimizes severe clinic stay rates and overall chronic treatment costs',
      'Strengthens broader community herd immunity, safeguarding local wildlife',
      'Provides legally compliant rabies certifications and hassle-free boarding records',
    ],
    process: [
      'Initial Wellness Assessment: Evaluating overall body temperature, weight, oral logs, and lymph nodes.',
      'Risk profiling: Formulating customized exposure grids (e.g. greenbelt ticks, urban dog parks).',
      'Ultra-Fine Administration: Employing gentle techniques and pediatric gauge needles to minimize physical distress.',
      'Post-Immune Diagnostics & Monitoring: Post-shot reviews to confirm high quality of immune system response.',
    ],
    faqs: [
      {
        question: 'Does my indoor cat really require immunizations?',
        answer: 'Yes. Mosquitoes, visiting dogs, and shoes can introduce viral elements. Core vaccines defend against airborne particles and emergency transmissions.',
      },
      {
        question: 'What is the schedule for puppies and kittens?',
        answer: 'Typically, boosters start at 6-8 weeks of age and are administered in 3-4 week intervals until they reach 16 weeks.',
      },
    ],
  },
  {
    id: 'dermatology',
    title: 'Dermatology',
    description: 'Specialists in advanced skin cell testing, allergy profiles, dynamic diet tracking, and cellular therapy.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632827/6C98B879-8452-4BF2-A8C3-4339BCD6471C-768x768_r78s5q.jpg',
    overview: 'Pet dermatological issues cause chronic itching, physical unrest, and sleep disturbances for both pets and owners. PAZ’s integrated skin specialist protocols target the root causes of inflammation, fungal overgrowths, parasite rashes, and environmental pollen allergies.',
    benefits: [
      'Eliminates chronic paw-biting, scratching loops, and localized ear inflammation',
      'Utilizes advanced biological immunotherapy and customized allergy shots',
      'Optimizes epidermal barrier lipid coats through diet-focused cellular wellness',
      'Stops secondary skin-defense failures and yeast infections before they set in',
    ],
    process: [
      'Visual Micro-Mapping: High-power microscopic skin cell scraping and cytological swabs.',
      'Allergy ID Panels: Pinpointing grass, pollen, parasite, and nutritional culprits.',
      'Therapeutic Plan Integration: Coordinating hypoallergenic diets, custom medicated rinses, and biological controllers.',
      'Symptom Evaluation Loops: Iterative reviews to refine cell responses and lower medicine levels.',
    ],
    faqs: [
      {
        question: 'How do I distinguish standard grooming scratching from abnormal allergies?',
        answer: 'Unusual paw licking, red ear shells, raw underarm patches, or fur thinness are strong indicators of dermatological flare-ups.',
      },
      {
        question: 'What biological options exist for long-term comfort?',
        answer: 'We provide revolutionary monoclonal antibodies (Cytopoint) and immunosuppressants (Apoquel) to stop itch triggers direct from the source.',
      },
    ],
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    description: 'State-of-the-art laboratory testing, complete micro-panels, and digital metrics generated in minutes.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632826/3D12470F-68FB-4C3D-8944-B9F4E836C394-square-3bfa57bac6fce7cf51313bb06f30981a-bnjr3fmlevac_cfzgej.jpg',
    overview: 'Pets cannot speak to outline their micro-pain points, which is why diagnostics serve as our clinical voice. PAZ is equipped with advanced in-house labs, allowing us to perform critical testing, blood counts, liver profiles, and urinalysis immediately.',
    benefits: [
      'In-office output in less than 15 minutes, skipping long commercial wait times',
      'Enables rapid detection of pancreatic, endocrine, hepatic, and metabolic anomalies',
      'Secures surgical anesthetics parameters with up-to-the-minute organ metrics',
      'Facilitates early detection of geriatric conditions and pre-symptomatic care',
    ],
    process: [
      'Sterile Fluid Collection: Quick, stress-free blood, stool, or urine collection.',
      'Advanced Molecular Processing: Centrifuging and loading specimens into precise analyzers.',
      'Veterinary Assessment: Comparing real-time outputs against established breed baseline databases.',
      'Holistic Explanation: Documenting and breaking down results with you to build a collective treatment tree.',
    ],
    faqs: [
      {
        question: 'Why does my pet require blood work prior to standard procedures?',
        answer: 'Diagnostics confirm that organs can process and filter anesthetic agents safely, revealing hidden risks beforehand.',
      },
      {
        question: 'How often should diagnostic profile sweeps be run for older pets?',
        answer: 'Senior pets (over 7 years) benefit greatly from bi-annual screening sweeps to manage chronic patterns.',
      },
    ],
  },
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    description: 'Comprehensive chronic disease management, endocrinology, and targeted non-invasive cellular healing.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632828/A5CA888E-2502-400E-8F2B-783B61A0088F-square-5b6cf9ea3b6d61c520beadce3e0c423e-6sjdmazwtnio_gjzytv.jpg',
    overview: 'Internal medicine targets multi-faceted organ disorders, hormonal imbalances, and gastro-intestinal states. PAZ applies a rigorous, evidence-based approach to diagnosing and treating complex conditions such as diabetes, Cushing’s, kidney disease, and autoimmune behaviors.',
    benefits: [
      'Comprehensive care plans addressing complex multi-system disorders',
      'Individualized blood glucose curves, endocrine tracking, and hormone titration',
      'Integrated nutritional directives to manage renal load and pancreatic stress',
      'Synergistic blend of precise pharmaceuticals and holistic herbal pathways',
    ],
    process: [
      'Comprehensive Symptom Mapping: Investigating water intake, energy levels, and bowel habits.',
      'Targeted Testing Sweep: Hormonal stimulations, biochemical panels, and organ screening.',
      'Custom Treatment Formulation: Devising an extensive treatment map with exact dosages.',
      'Long-Term Support Loops: Scheduled tracking checks to maintain safe vitals and stable baseline levels.',
    ],
    faqs: [
      {
        question: 'What are common warning signs of internal organ challenges?',
        answer: 'Unusual changes in drinking habits, unexplained weight fluctuations, chronic fatigue, and appetite shifts require professional exams.',
      },
      {
        question: 'How does PAZ combine holistic medicine with standard internal therapies?',
        answer: 'We balance standard clinical prescriptions with targeted nutritional therapies, acupuncture, and natural anti-inflammatories.',
      },
    ],
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: 'Immediate, high-vibe trauma response, toxic ingestion counters, and lifesaver stabilization.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632828/D1DD9755-BBDF-4803-8F9E-06070B58081F-square-12f4083bd53464cf394b11f0483d28fc-eyhgnumrdz4x_i2enbj.jpg',
    overview: 'When crisis strikes, every second dictates outcome. PAZ’s emergency response workflow is optimized for immediate triage, metabolic stabilizing, toxic extraction, trauma surgery, and high-flow oxygen support. We handle acute situations dynamically.',
    benefits: [
      'Instant professional vet triage with zero administrative delays or lines',
      'State-of-the-art emergency tracking monitors, infusion pumps, and oxygen cages',
      'Equipped with advanced toxic ingestion antidotes and rapid mechanical tools',
      'Seamless coordination with top overnight 24-hour critical care hospitals',
    ],
    process: [
      'Immediate Triage: Immediate vital checks for airway patency, heart rhythms, and consciousness.',
      'Immediate Stabilization: Fluid resuscitations, pain control blocks, and thermal normalization.',
      'Rapid Diagnostics Sweep: Trauma ultrasound scans, blood gas checks, and quick imaging.',
      'Emergency Therapeutics: Critical surgeries, targeted antidotes, or highly monitored overnight transitions.',
    ],
    faqs: [
      {
        question: 'What qualifies as an absolute veterinary emergency?',
        answer: 'Difficulty breathing, active bleeding, chocolate/grape intake, sudden paralysis, heat stroke, or continuous seizures demand immediate emergency services.',
      },
      {
        question: 'Do I need to call ahead before arriving?',
        answer: 'While walks-ins are triaged immediately, calling ahead helps us prepare specific tools for arrival.',
      },
    ],
  },
  {
    id: 'radiology',
    title: 'Radiology',
    description: 'Instant, low-radiation digital imaging, bone structural maps, and fast diagnostic reviews.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632828/4F5939B3-3CC7-4C1A-B59A-AA2182C64605-square-5ac893b7c6f21fb340cfb2f271f61226-iovx05ukrd8g_xg0yvl.jpg',
    overview: 'Our veterinary radiology systems utilize next-generation digital sensors, producing ultra-high definition skeletal and internal organ images in seconds. This allows us to spot microscopic bone cracks, dangerous foreign objects, and lung issues with minimal x-ray exposure.',
    benefits: [
      'Crystal-clear 2D digital skeletal, spinal, and organ views in seconds',
      'Drastically reduced radiation exposure, prioritizing patient safety',
      'Instant digital export for quick, priority specialist reviews',
      'Non-invasive diagnostic mapping, eliminating the need for exploratory procedures',
    ],
    process: [
      'Anatomical Positioning: Gentle alignment using soft foam bolsters on a clean table.',
      'Comfort-First Guarding: Lead-apron screening and calm handling to keep pets perfectly secure.',
      'High-Speed Capture: Taking shots in milliseconds to completely avoid image blur.',
      'Instant Screen Review: Reviewing contrast curves on professional diagnostic screens with you.',
    ],
    faqs: [
      {
        question: 'Will radiation exposure harm my pet during the scan?',
        answer: 'No. Our state-of-the-art digital technology uses ultra-low radiation doses, making standard imaging safe.',
      },
      {
        question: 'Do pets need to be sedated to get clear images?',
        answer: 'Only if they are in intense discomfort, or need specific skeletal angles that require absolute stillness.',
      },
    ],
  },
  {
    id: 'surgery',
    title: 'Surgery',
    description: 'Advanced sterile surgical suites, personalized anesthesia guidelines, and soft-tissue repair.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632829/Layer-54-square-f8a17029906c123d5790692e1b06aa06-fve6s7np2bgl_cxi18t.jpg',
    overview: 'We take veterinary surgery to the next level of precision. Our surgical rooms feature HEPA filtration, state-of-the-art pulse monitors, thermal surgery beds, and high-frequency cautery tools. We handle routine spaying/neutering and complex internal repairs with equal care.',
    benefits: [
      'Surgical rooms maintain strict negative-pressure sterility standards',
      'Full-spectrum safety monitors track real-time heart patterns, temperature, and breathing',
      'Multimodal pain blocking strategies minimize overall post-surgery recovery times',
      'Certified veterinary surgical monitors oversee recovery to ensure smooth waking',
    ],
    process: [
      'Pre-Op diagnostics: Screening blood counts, platelet baselines, and heart rhythms.',
      'Anesthetic custom calibration: Weighing exact metabolic pathways to design safe gas levels.',
      'Sterile operation performance: Gentle tissues techniques and precision laser/scalpel incisions.',
      'Warm post-surgery recovery: Soft-lit climate blankets, pain blockers, and dedicated support.',
    ],
    faqs: [
      {
        question: 'When can my pet return to standard activities post-surgery?',
        answer: 'Most incisions heal in 10-14 days. Limit running, jump routines, and baths, and maintain protective cone guards.',
      },
      {
        question: 'How do you monitor breathing during general surgery?',
        answer: 'A dedicated nurse monitors a pulse oximeter, capnograph, ECG, and blood pressure during the entire procedure.',
      },
    ],
  },
  {
    id: 'dental-care',
    title: 'Dental Care',
    description: 'Total oral health sweeps, sub-gingival deep cleanings, protective polishes, and digital dental x-rays.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632829/jenna_webb-square-d802a5dc55d4044ce8b0470c9cc54627-6zfbeasltxjk_f6wx1i.jpg',
    overview: 'Dental disease is a hidden source of systemic infection. At PAZ, we perform comprehensive dental cleanings, using ultrasonic scalers to remove plaque and polish teeth, combined with digital dental x-rays to evaluate tooth roots beneath the gums.',
    benefits: [
      'Reverses chronic bad breath, red gingival margins, and periodontal pain',
      'Prevents bacteria from migrating through the bloodstream to the heart and kidneys',
      'Saves healthy teeth from future root decay and costly extractions',
      'Restores active chewing energy and overall systemic vitality',
    ],
    process: [
      'Oral probing sweep: Complete mapping of calculus index logs and gum pockets.',
      'Dental radiography: Digital dental x-rays to scan roots beneath the gumline.',
      'Scaling and polishing: Precise cleaning followed by protective enamel sealing.',
      'Home preventative planning: Designing customized plaque barriers, enzymes, and specialized chews.',
    ],
    faqs: [
      {
        question: 'Why must pet dental cleaning be performed under general anesthesia?',
        answer: 'Anesthesia ensures absolute comfort, allows sub-gingival scaling, and keeps the airway safe with an endotracheal tube.',
      },
      {
        question: 'How often should veterinary dental cleanings be scheduled?',
        answer: 'Most pets benefit from annual cleanings, while some breeds may need exams every 6 months to manage tartar.',
      },
    ],
  },
  {
    id: 'ultrasound',
    title: 'Ultrasound',
    description: 'Real-time, high-fidelity internal organ soundwave scanning, fluid evaluations, and targeted biopsies.',
    image: 'https://res.cloudinary.com/dju25z9v3/image/upload/v1781632832/krislynn-kovu-square-312ad269e327467d286ad9cfd8c8f9f0-nmfv75cqjxrb_cjnjmo.jpg',
    overview: 'Our high-frequency ultrasound systems use high-density probes to visualize soft tissues in motion. This provides dynamic, multi-dimensional views of the liver, kidneys, spleen, and heart pumping chambers, all as a non-invasive procedure.',
    benefits: [
      'Dynamic real-time visualizations of heart valves and organ tissue textures',
      'Completely needle-free, painless diagnostic mapping without discomfort',
      'Provides micro-precision guidance for fine-needle cellular biopsies',
      'No recovery time required; pets walk out immediately with clear answers',
    ],
    process: [
      'Preparation: Shaving a patch of fur to ensure direct skin contact with the sound gel.',
      'Calm positioning: Getting pets comfortable on a specialized soft-foam, supportive bed.',
      'Acoustic scanning: Moving the probe over active organs to view real-time screen feeds.',
      'Immediate assessment: Documenting dimensions and outlining treatment paths.',
    ],
    faqs: [
      {
        question: 'How does an ultrasound study differ from normal x-ray imaging?',
        answer: 'X-rays show bones and organ shapes. Ultrasound lets us look inside the organs to evaluate tissue density and fluid flow.',
      },
      {
        question: 'Does my pet need to fast before an abdominal study sweep?',
        answer: 'Yes. Fasting for 8-12 hours minimizes stomach gas, yielding clearer organ scans.',
      },
    ],
  },
];
