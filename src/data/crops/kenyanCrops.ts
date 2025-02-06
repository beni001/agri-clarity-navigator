
import { CropRecommendation } from '../../types/crops';

export const kenyanCrops: CropRecommendation[] = [
  {
    name: "Sukuma Wiki (Collard Greens)",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 40,
      phosphorus: 30,
      potassium: 35
    },
    regions: ["Central Kenya", "Rift Valley"],
    notes: "A staple leafy vegetable in Kenya, Sukuma Wiki thrives in well‐drained, moderately fertile soils and can be grown year‐round with peaks during the rainy seasons.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "40-50 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "Year-round with rainy season peaks"
    },
    yieldPotential: {
      amount: 3,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for aphids and caterpillars; use biopesticides if infestations occur.",
      diseaseManagement: "Ensure good air circulation and avoid waterlogging to prevent fungal diseases.",
      nutrientManagement: "Use compost and balanced fertilizers to maintain soil fertility."
    },
    metadata: {
      source: "KALRO, Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Pigeon Pea",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 30,
      phosphorus: 20,
      potassium: 25
    },
    regions: ["Eastern Kenya", "Semi-arid regions"],
    notes: "A drought-tolerant legume that fixes nitrogen, thereby improving soil fertility.",
    growth: {
      germinationPeriod: "10-14 days",
      maturityPeriod: "120-150 days",
      plantSpacing: "40-50 cm apart",
      plantingSeason: "March - May or September - November"
    },
    yieldPotential: {
      amount: 1.2,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Inspect regularly for pod borers; apply integrated pest management as needed.",
      diseaseManagement: "Apply appropriate fungicides if fungal infections are detected.",
      nutrientManagement: "Incorporate organic matter to support nitrogen fixation."
    },
    metadata: {
      source: "KALRO, Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Chili Pepper",
    phRange: [6.0, 6.8],
    nutrients: {
      nitrogen: 60,
      phosphorus: 40,
      potassium: 50
    },
    regions: ["Central Kenya", "Highland regions"],
    notes: "Requires warm temperatures and well-drained soil for optimum flavor and high yield.",
    growth: {
      germinationPeriod: "10-14 days",
      maturityPeriod: "70-90 days",
      plantSpacing: "45-60 cm apart",
      plantingSeason: "February - April"
    },
    yieldPotential: {
      amount: 8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for aphids and whiteflies; use organic insecticides as needed.",
      diseaseManagement: "Maintain proper spacing to reduce humidity and the risk of fungal infections.",
      nutrientManagement: "Apply balanced fertilizer during early growth stages."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Sesame",
    phRange: [5.5, 7.0],
    nutrients: {
      nitrogen: 20,
      phosphorus: 15,
      potassium: 25
    },
    regions: ["Semi-arid regions of Kenya"],
    notes: "A drought-tolerant oilseed crop that thrives in sandy soils with excellent drainage.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 700,
      unit: "kg/ha"
    },
    managementPractices: {
      pestControl: "Control insect pests using neem-based solutions.",
      diseaseManagement: "Practice crop rotation to minimize soil-borne diseases.",
      nutrientManagement: "Low fertilizer input is required; supplement with organic compost if needed."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Finger Millet",
    phRange: [5.5, 6.5],
    nutrients: {
      nitrogen: 25,
      phosphorus: 20,
      potassium: 20
    },
    regions: ["Highland regions", "Eastern Kenya"],
    notes: "Highly resilient and well-suited for marginal soils with variable rainfall patterns.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "20-25 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: {
      amount: 1,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for finger millet midge; use biopesticides when necessary.",
      diseaseManagement: "Maintain field sanitation to reduce fungal infection risk.",
      nutrientManagement: "Apply organic manure to improve soil fertility."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Teff",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 30,
      phosphorus: 20,
      potassium: 30
    },
    regions: ["Central Kenya highlands"],
    notes: "A nutrient-rich cereal that adapts well to various soils and provides a gluten-free grain option.",
    growth: {
      germinationPeriod: "5-7 days",
      maturityPeriod: "60-90 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "October - November"
    },
    yieldPotential: {
      amount: 1,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Use integrated pest management techniques.",
      diseaseManagement: "Ensure adequate spacing to prevent fungal diseases.",
      nutrientManagement: "Incorporate organic compost prior to planting."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Garlic",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 45,
      phosphorus: 35,
      potassium: 40
    },
    regions: ["Central and Rift Valley Kenya"],
    notes: "Prefers well-drained soils and benefits from organic amendments for robust bulb development.",
    growth: {
      germinationPeriod: "14-21 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: {
      amount: 4,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control onion fly and thrips with appropriate organic organic pesticides.",
      diseaseManagement: "Rotate crops to prevent soil-borne diseases like white rot.",
      nutrientManagement: "Incorporate compost and balanced fertilizers."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Onion",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 55,
      phosphorus: 40,
      potassium: 45
    },
    regions: ["Central Kenya", "Rift Valley"],
    notes: "Thrives in well-drained, loamy soils with consistent moisture for bulb development.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "10-15 cm apart",
      plantingSeason: "August - October"
    },
    yieldPotential: {
      amount: 20,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Manage thrips and bulb fly using biological controls.",
      diseaseManagement: "Prevent downy mildew with crop rotation and proper spacing.",
      nutrientManagement: "Supplement with nitrogen-rich fertilizers during bulb formation."
    },
    metadata: {
      source: "KALRO, Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Sweet Corn",
    phRange: [6.0, 6.8],
    nutrients: {
      nitrogen: 90,
      phosphorus: 50,
      potassium: 60
    },
    regions: ["Central Kenya", "Highlands"],
    notes: "Requires fertile soils and consistent moisture for optimal ear development.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "70-90 days",
      plantSpacing: "20-25 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 10,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for corn borers and armyworms; use biopesticides as needed.",
      diseaseManagement: "Apply fungicides to prevent leaf blight and rust.",
      nutrientManagement: "Use high-nitrogen fertilizer during early growth."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Cucumber",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 70,
      phosphorus: 40,
      potassium: 50
    },
    regions: ["Central Kenya", "Rift Valley"],
    notes: "Needs warm temperatures, well-drained soil, and ample organic matter for healthy vine and fruit development.",
    growth: {
      germinationPeriod: "5-7 days",
      maturityPeriod: "50-60 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "April - June"
    },
    yieldPotential: {
      amount: 15,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control cucumber beetles with organic insecticides.",
      diseaseManagement: "Prevent powdery mildew with proper spacing and ventilation.",
      nutrientManagement: "Apply balanced fertilizers and compost to boost growth."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Sunflower",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 50,
      phosphorus: 40,
      potassium: 45
    },
    regions: ["Semi-arid regions of Kenya"],
    notes: "Thrives in full sun and well-drained sandy loam soils, making it ideal for oilseed production.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-100 days",
      plantSpacing: "30-45 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 1,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for aphids and sunflower moth; use integrated pest management.",
      diseaseManagement: "Ensure proper spacing to reduce fungal infection risks.",
      nutrientManagement: "Apply balanced fertilizers and organic amendments."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Mung Bean",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 20,
      phosphorus: 15,
      potassium: 20
    },
    regions: ["Semi-arid and arid regions"],
    notes: "A drought-tolerant legume that fixes nitrogen and improves soil fertility.",
    growth: {
      germinationPeriod: "4-7 days",
      maturityPeriod: "60-70 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 0.8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Manage aphids and pod borers with organic pesticides.",
      diseaseManagement: "Ensure good drainage to prevent fungal issues.",
      nutrientManagement: "Incorporate compost to enhance nitrogen fixation."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Bambara Groundnut",
    phRange: [5.5, 7.0],
    nutrients: {
      nitrogen: 25,
      phosphorus: 20,
      potassium: 25
    },
    regions: ["Semi-arid regions", "Eastern Kenya"],
    notes: "A drought-tolerant legume that improves soil structure and enriches soil nitrogen.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "120-150 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "May - July"
    },
    yieldPotential: {
      amount: 0.5,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for weevils and aphids; use biological controls.",
      diseaseManagement: "Practice crop rotation to reduce soil-borne pathogens.",
      nutrientManagement: "Enhance soil fertility with compost and green manure."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Swiss Chard",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 40,
      phosphorus: 30,
      potassium: 35
    },
    regions: ["Central Kenya", "Highlands"],
    notes: "A nutrient-dense leafy green that thrives in well-drained soils with moderate fertility.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "50-60 days",
      plantSpacing: "25-35 cm apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: {
      amount: 3,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control leaf miners and aphids using organic insecticides.",
      diseaseManagement: "Avoid waterlogging to prevent root rot.",
      nutrientManagement: "Use balanced fertilizers and organic compost."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Litchi",
    phRange: [5.5, 6.5],
    nutrients: {
      nitrogen: 70,
      phosphorus: 50,
      potassium: 60
    },
    regions: ["Western Kenya", "Coastal regions"],
    notes: "Litchi thrives in tropical climates with well-drained, slightly acidic soils.",
    growth: {
      germinationPeriod: "Varies by propagation method",
      maturityPeriod: "3-5 years",
      plantSpacing: "8-10 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: {
      amount: 15,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for fruit flies and scale insects; use integrated pest management.",
      diseaseManagement: "Ensure proper pruning and sanitation to reduce fungal risks.",
      nutrientManagement: "Apply organic compost and micronutrients during fruiting."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Custard Apple",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 60,
      phosphorus: 40,
      potassium: 50
    },
    regions: ["Coastal Kenya", "Eastern Kenya"],
    notes: "Thrives in tropical conditions and benefits from regular pruning and organic fertilization.",
    growth: {
      germinationPeriod: "Varies",
      maturityPeriod: "3-4 years",
      plantSpacing: "8-10 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: {
      amount: 5,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for fruit borers and scale insects; use organic pesticides when needed.",
      diseaseManagement: "Apply copper-based fungicides to prevent common fungal infections.",
      nutrientManagement: "Regularly apply compost and balanced fertilizers."
    },
    metadata: {
      source: "KALRO, Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Starfruit",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 50,
      phosphorus: 40,
      potassium: 45
    },
    regions: ["Coastal Kenya"],
    notes: "Requires well-drained soils and thrives in tropical climates with moderate organic matter.",
    growth: {
      germinationPeriod: "Varies",
      maturityPeriod: "2-3 years",
      plantSpacing: "6-8 m apart",
      plantingSeason: "Year-round"
    },
    yieldPotential: {
      amount: 8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control pests using integrated pest management practices.",
      diseaseManagement: "Use organic fungicides to manage fungal infections.",
      nutrientManagement: "Apply balanced fertilizers and compost on a regular basis."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Mushrooms",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 10,
      phosphorus: 10,
      potassium: 10
    },
    regions: ["Controlled environment agriculture facilities"],
    notes: "Grown in controlled environments, mushrooms require strict management of humidity, temperature, and sterility.",
    growth: {
      germinationPeriod: "N/A",
      maturityPeriod: "30-60 days",
      plantSpacing: "N/A",
      plantingSeason: "Year-round (in controlled conditions)"
    },
    yieldPotential: {
      amount: 5,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Maintain sterile conditions to prevent pest infestations.",
      diseaseManagement: "Monitor humidity and temperature to avoid mold growth.",
      nutrientManagement: "Use specially formulated substrates for optimal mushroom yield."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Chia",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 25,
      phosphorus: 20,
      potassium: 25
    },
    regions: ["Semi-arid regions"],
    notes: "Valued for its nutritional seeds, chia thrives in well-drained soils with minimal water.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "February - April"
    },
    yieldPotential: {
      amount: 0.8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for seed weevils and aphids.",
      diseaseManagement: "Ensure proper drainage to prevent fungal infections.",
      nutrientManagement: "Apply balanced fertilizers along with organic compost."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Taro",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 40,
      phosphorus: 30,
      potassium: 35
    },
    regions: ["Tropical regions of Kenya"],
    notes: "Requires consistently moist soils with ample organic matter to develop well.",
    growth: {
      germinationPeriod: "Varies",
      maturityPeriod: "8-10 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "Year-round in warm areas"
    },
    yieldPotential: {
      amount: 8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for taro beetles and snails; use organic measures when necessary.",
      diseaseManagement: "Ensure proper drainage to avoid corm rot.",
      nutrientManagement: "Apply well-rotted manure and organic compost pre-planting."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Soybean",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 20,
      phosphorus: 30,
      potassium: 25
    },
    regions: ["Central Kenya", "Highlands"],
    notes: "A protein-rich legume that boosts soil nitrogen through biological fixation.",
    growth: {
      germinationPeriod: "5-7 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 1.2,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Use integrated pest management to control soybean aphids.",
      diseaseManagement: "Rotate crops to prevent soybean rust and other fungal diseases.",
      nutrientManagement: "Apply phosphorus-rich fertilizers at planting."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Chickpea",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 20,
      phosphorus: 25,
      potassium: 20
    },
    regions: ["Semi-arid regions"],
    notes: "A drought-tolerant legume that also contributes to improved soil structure via nitrogen fixation.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-110 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: {
      amount: 1.0,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for pod borers and aphids; use organic pesticides as needed.",
      diseaseManagement: "Practice crop rotation to reduce disease pressure.",
      nutrientManagement: "Enhance soil organic matter through compost application."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Lentil",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 15,
      phosphorus: 20,
      potassium: 15
    },
    regions: ["Central Kenya", "Semi-arid regions"],
    notes: "A cool-season legume that enriches soil nitrogen while providing a protein-rich crop.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "80-100 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: {
      amount: 0.8,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control aphids and weevils with organic methods.",
      diseaseManagement: "Ensure proper spacing to minimize fungal issues.",
      nutrientManagement: "Apply organic compost to supplement nitrogen fixation."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Oats",
    phRange: [5.5, 7.0],
    nutrients: {
      nitrogen: 50,
      phosphorus: 40,
      potassium: 45
    },
    regions: ["Cool highland regions"],
    notes: "Suited to cooler climates and well-drained soils, oats provide a healthy cereal crop option.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "September - November"
    },
    yieldPotential: {
      amount: 1.5,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Manage oat aphids and cutworms with organic insecticides.",
      diseaseManagement: "Prevent root rot by avoiding waterlogging.",
      nutrientManagement: "Use balanced fertilizers to promote growth."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Rapeseed",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 60,
      phosphorus: 45,
      potassium: 50
    },
    regions: ["Cool highland regions"],
    notes: "An oilseed crop requiring cool climates and well-drained soils for optimum oil production.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "100-120 days",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "August - September"
    },
    yieldPotential: {
      amount: 2,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for aphids and flea beetles; use integrated pest management.",
      diseaseManagement: "Practice proper field hygiene to prevent fungal diseases.",
      nutrientManagement: "Supplement with phosphorus and potassium during early growth."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Mustard",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 40,
      phosphorus: 30,
      potassium: 35
    },
    regions: ["Semi-arid and temperate regions"],
    notes: "A fast-growing crop useful as a cover crop and for oil production; thrives with minimal inputs.",
    growth: {
      germinationPeriod: "5-7 days",
      maturityPeriod: "60-80 days",
      plantSpacing: "20-30 cm apart",
      plantingSeason: "October - December"
    },
    yieldPotential: {
      amount: 1,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control aphids and flea beetles with organic insecticides.",
      diseaseManagement: "Practice crop rotation to prevent downy mildew.",
      nutrientManagement: "Apply organic compost and balanced fertilizers."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Pumpkin",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 70,
      phosphorus: 50,
      potassium: 60
    },
    regions: ["Central Kenya", "Highlands"],
    notes: "Requires rich, well-drained soils and ample moisture to produce high yields of fruit.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "90-120 days",
      plantSpacing: "1-2 m apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 10,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for squash bugs and aphids; use biological controls.",
      diseaseManagement: "Ensure proper spacing to prevent powdery mildew.",
      nutrientManagement: "Apply compost and balanced fertilizers at fruit set."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Strawberry",
    phRange: [5.5, 6.5],
    nutrients: {
      nitrogen: 60,
      phosphorus: 40,
      potassium: 50
    },
    regions: ["Cool highland regions"],
    notes: "Requires well-drained, slightly acidic soils and benefits from raised beds for optimal fruit quality.",
    growth: {
      germinationPeriod: "Varies",
      maturityPeriod: "4-6 weeks after flowering",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "September - November"
    },
    yieldPotential: {
      amount: 10,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Manage aphids and mites with organic insecticides.",
      diseaseManagement: "Use fungicides to control gray mold and powdery mildew.",
      nutrientManagement: "Apply compost and balanced fertilizers during fruiting."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Moringa",
    phRange: [6.0, 7.5],
    nutrients: {
      nitrogen: 30,
      phosphorus: 20,
      potassium: 25
    },
    regions: ["Semi-arid and tropical regions"],
    notes: "Highly nutritious and drought-resistant, Moringa adapts well to diverse soil conditions.",
    growth: {
      germinationPeriod: "7-10 days",
      maturityPeriod: "80-90 days",
      plantSpacing: "1-2 m apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 2,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control leaf-eating insects with biopesticides.",
      diseaseManagement: "Ensure proper spacing to minimize fungal issues.",
      nutrientManagement: "Apply compost and organic fertilizers to boost growth."
    },
    metadata: {
      source: "KALRO",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Ginger",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 80,
      phosphorus: 60,
      potassium: 70
    },
    regions: ["Tropical regions"],
    notes: "Ginger thrives in warm, humid conditions with well-drained, loamy soils enriched with organic matter.",
    growth: {
      germinationPeriod: "10-14 days",
      maturityPeriod: "8-10 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 12,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Control root knot nematodes with organic amendments.",
      diseaseManagement: "Prevent fungal infections with proper spacing and timely fungicide applications.",
      nutrientManagement: "Apply balanced fertilizers and organic compost."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  },
  {
    name: "Turmeric",
    phRange: [6.0, 7.0],
    nutrients: {
      nitrogen: 70,
      phosphorus: 50,
      potassium: 60
    },
    regions: ["Tropical regions"],
    notes: "Requires warm temperatures and rich, well-drained soils with high organic content for vibrant rhizome development.",
    growth: {
      germinationPeriod: "14-21 days",
      maturityPeriod: "8-9 months",
      plantSpacing: "30-40 cm apart",
      plantingSeason: "March - May"
    },
    yieldPotential: {
      amount: 15,
      unit: "tonnes/ha"
    },
    managementPractices: {
      pestControl: "Monitor for rhizome rot and leaf spot; use organic pesticides when needed.",
      diseaseManagement: "Ensure proper drainage and spacing to prevent fungal diseases.",
      nutrientManagement: "Apply organic matter and balanced fertilizers during growth."
    },
    metadata: {
      source: "Kenya Agricultural Extension Service",
      lastUpdated: new Date().toISOString()
    }
  }
];
