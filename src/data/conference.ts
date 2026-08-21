export const importantDates = [
  { label: "Submission Opens", date: "January 15, 2025" },
  { label: "Paper Submission Deadline", date: "February 28, 2025" },
  { label: "Acceptance Notification", date: "March 15, 2025" },
  { label: "Camera-Ready Manuscript", date: "May 15, 2025" },
  { label: "Registration Closes", date: "May 20, 2025" },
  { label: "Conference Dates", date: "June 13–14, 2025" },
];

export const tracks = [
  {
    id: "Track 1",
    title: "Next Generation Technology Trends",
    chair: "Dr. Manoj Mishra, Professor, IIT Roorkee",
    description:
      "Internet of Things, Blockchain, Cyber-Physical Systems, Digital Transformation, Metaverse, Smart Cities and Machine-to-Machine systems.",
  },
  {
    id: "Track 2",
    title: "Artificial Intelligence and Data Science",
    chair: "Dr. Mahesh Govil, Professor and Director, NIT Sikkim",
    description:
      "Data Analytics, Deep Learning, Neural Networks, Fuzzy Logic, Expert Systems, Agents and Multi-Agent Systems.",
  },
  {
    id: "Track 3",
    title: "Computing",
    chair: "Dr. H. M. Gupta, Former Professor, IIT Delhi",
    description:
      "High-Performance Computing, Cloud and Edge architectures, Quantum Computing and large-scale distributed systems.",
  },
  {
    id: "Track 4",
    title: "Security and Privacy",
    chair: "Dr. Sanjeev Sofat, Professor, PEC Chandigarh",
    description:
      "Cyber security concepts, digital forensics, intrusion detection, cryptography, trust management and privacy regulation.",
  },
  {
    id: "Track 5",
    title: "Communication",
    chair: "Dr. Aditya Trivedi, Professor, ABV-IIITM Gwalior",
    description:
      "Connected machines, satellite communication systems, 4G/5G/6G network evolution and open spectrum solutions.",
  },
];

export const earlyBirdFees = [
  { type: "Academician", indian: "₹5,000", foreign: "US$ 150" },
  { type: "Industry Person", indian: "₹5,500", foreign: "US$ 200" },
  { type: "Student", indian: "₹4,000", foreign: "US$ 120" },
  { type: "Attendee", indian: "₹3,000", foreign: "US$ 50" },
];

export const normalFees = [
  { type: "Academician", indian: "₹6,000", foreign: "US$ 200" },
  { type: "Industry Person", indian: "₹6,000", foreign: "US$ 250" },
  { type: "Student", indian: "₹5,000", foreign: "US$ 150" },
  { type: "Attendee", indian: "₹4,000", foreign: "US$ 100" },
];

export const bankDetails = [
  ["Account Number", "37792171549"],
  ["IFSC Code", "SBIN0050841"],
  ["MICR Code", "144002065"],
  ["SWIFT Code", "SBININBB440"],
  ["Branch", "REC Jalandhar"],
  ["Bank Name", "State Bank of India"],
];

export type CommitteeGroup = { title: string; members: string[] };

export const leadership: CommitteeGroup[] = [
  { title: "Patron", members: ["Prof. Binod Kumar Kanaujia, Director, NIT Jalandhar"] },
  { title: "Co-Patron", members: ["Prof. Ajay Bansal, Registrar, NIT Jalandhar"] },
  { title: "Steering Committee", members: ["Prof. J. N. Chakraborty, Professor, NIT Jalandhar"] },
  { title: "Executive General Chair", members: ["Dr. Geeta Sikka, Professor, NIT Delhi"] },
  {
    title: "General Chair(s)",
    members: [
      "Prof. A. L. Sangal, Professor, NIT Jalandhar",
      "Prof. Harsh K. Verma, Professor, NIT Jalandhar",
    ],
  },
  {
    title: "Conference Chair(s)",
    members: [
      "Dr. Renu Dhir, Associate Professor, NIT Jalandhar",
      "Dr. Rajneesh Rani, Associate Professor & Head, CSE Dept., NIT Jalandhar",
      "Dr. Anurag Singh, Associate Professor, NIT Delhi",
    ],
  },
  { title: "Convener(s)", members: ["Er. D. K. Gupta, Associate Professor, NIT Jalandhar"] },
  {
    title: "Secretary",
    members: [
      "Dr. Samayveer Singh, Assistant Professor, NIT Jalandhar",
      "Dr. Urvashi, Assistant Professor, NIT Jalandhar",
      "Dr. Karan Verma, Assistant Professor, NIT Delhi",
    ],
  },
];

export const internationalAdvisory = [
  "Prof. Mukesh Singhal, Chancellor's Professor, University of California at Merced",
  "Prof. P. R. Kumar, Distinguished Professor, Texas A&M University, USA",
  "Prof. Rajkumar Buyya, Distinguished Professor, University of Melbourne, Australia",
  "Prof. Stan Jarzabek, Professor, Bialystok University of Technology, Poland",
  "Prof. Vijay Kumar, Curators' Distinguished Professor, University of Missouri-Kansas City, USA",
  "Prof. Kevin Curran, Professor, Ulster University, Northern Ireland",
  "Prof. M. Yasin Akhtar Raja, Professor, University of North Carolina at Charlotte, USA",
  "Prof. Bharat K. Bhargava, Professor, Purdue University, Indiana",
  "Prof. Jai P. Agrawal, Professor, Purdue University Northwest, USA",
  "Prof. Nasir Ghani, Professor, University of South Florida, USA",
  "Prof. Harpreet Singh, Professor, Wayne State University, USA",
  "Prof. Ki-Hyun Jung, Professor, Kyungil University, Republic of Korea",
  "Dr. Anand Paul, Associate Professor, Kyungpook National University, South Korea",
  "Dr. Pavel Kromer, Associate Professor, VSB-Technical University of Ostrava, Czech Republic",
  "Dr. Pradeep Kumar, Assistant Professor, University of KwaZulu-Natal, South Africa",
  "Dr. Chaman Verma, Assistant Professor, Eötvös Loránd University, Budapest, Hungary",
];

export const nationalAdvisory = [
  "Padma Shri Prof. Deepak B. Phatak, Professor, IIT Bombay",
  "Prof. K. K. Aggarwal, Chairman, NBA",
  "Prof. Manoj Singh Gaur, Director, IIT Jammu",
  "Prof. Pramod Kumar Jain, Director, IIT (BHU) Varanasi",
  "Prof. R. C. Joshi, Former Professor, IIT Roorkee & Chancellor, Graphic Era University",
  "Prof. Amita Dev, Vice Chancellor, IGDTUW Delhi",
  "Prof. Balaraman Ravindran, Professor, IIT Madras",
  "Prof. Somenath Biswas, Professor, IIT Kanpur",
  "Prof. Rajeev Sangal, Professor, IIIT Hyderabad",
  "Prof. Manoj Mishra, Professor, IIT Roorkee",
  "Prof. Rajendra Kumar Sharma, Vice Chancellor, JUIT Solan",
  "Prof. Saroj Kaushik, Former Professor, IIT Delhi",
  "Prof. Y. N. Singh, Professor, IIT Kanpur",
  "Prof. Rajeev Srivastava, Professor & Head CSE, IIT (BHU) Varanasi",
  "Prof. Sanjeev Sofat, Professor, PEC University of Technology, Chandigarh",
  "Prof. Satish Chand, Professor, JNU New Delhi",
  "Prof. Karm Veer Arya, Professor, IIITM Gwalior",
  "Prof. Ashwani Kumar, Professor, NIT Kurukshetra",
  "Prof. Jitender Kumar Chhabra, Professor, NIT Kurukshetra",
  "Prof. Aditya Trivedi, Professor, ABV-IIITM Gwalior",
  "Prof. N. P. Gopalan, Professor, NIT Tiruchirappalli",
  "Prof. Shekhar Verma, Professor, IIIT Allahabad",
  "Prof. Daya Gupta, Professor, DTU New Delhi",
  "Prof. Arvinder Kaur, Professor, GGSIPU Delhi",
  "Prof. Ram Sabhar Yadav, Professor, MNNIT Allahabad",
  "Prof. Deepak Garg, Professor, Bennett University, Delhi",
  "Prof. Devanand, Professor, Central University of Jammu",
  "Prof. B. S. Kaith, Professor, NIT Jalandhar",
  "Prof. Hardeep Singh, Professor, GNDU Amritsar",
  "Prof. O. P. Verma, Professor, DTU New Delhi",
  "Prof. Mayank Dave, Professor, NIT Kurukshetra",
  "Prof. Seema Bawa, Professor, Thapar University, Patiala",
  "Dr. Shailender Kumar, Professor, DTU New Delhi",
  "Dr. Aneesh Krishna, Associate Professor, Curtin University, Australia",
  "Dr. Vivek Kumar Sehgal, Associate Professor, JUIT Solan",
];

export const organisingGroups: CommitteeGroup[] = [
  {
    title: "Publication Committee",
    members: [
      "Dr. K. P. Sharma (Chair)",
      "Dr. Swarnima Singh (Chair)",
      "Dr. Kunwar Pal (Secretary)",
      "Dr. Deepti Kakkar (Secretary)",
      "Dr. Avni Vyas (Secretary)",
    ],
  },
  {
    title: "Publicity and Media Committee",
    members: [
      "Dr. Lalatendu Behera",
      "Dr. Indu Saini",
      "Dr. Mohit Kumar",
      "Dr. Aruna Malik",
      "Dr. Urvashi",
    ],
  },
  {
    title: "Registration and Hospitality Committee",
    members: [
      "Dr. Jagdeep Kaur",
      "Dr. Shefali Arora",
      "Dr. Shveta Mahajan",
      "Mr. Rahul Aggarwal",
      "Dr. Simranjit Singh",
      "Dr. Karan Veer",
    ],
  },
  {
    title: "Finance Committee",
    members: ["Dr. Prashant Kumar", "Dr. N. P. Singh", "Dr. Nisha Chaurasia"],
  },
  {
    title: "Accommodation and Transportation Committee",
    members: [
      "Mr. D. K. Gupta",
      "Dr. Samayveer Singh",
      "Dr. Banalaxmi",
      "Dr. Naveen Gupta",
      "Dr. Manjeet Singh",
      "Dr. Karan Jain",
    ],
  },
  {
    title: "Planetary Committee",
    members: [
      "Dr. Afzal Sikander",
      "Dr. Ravi Verma",
      "Dr. Vijay Kumar",
      "Dr. Kusum Bharti",
      "Dr. Avtar Singh",
      "Dr. Neeraj Kumar",
    ],
  },
  {
    title: "Student Members",
    members: [
      "Mr. Ghanshyam Gupta",
      "Mr. Hemant Singh Pipchanot",
      "Mr. Somesh Sisodia",
      "Mr. Anurag",
      "Mr. Sunandhit Gupta",
    ],
  },
];
