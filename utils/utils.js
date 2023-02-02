import { CheckCircleOutline, CloseOutlined, DiamondOutlined, Done } from "@mui/icons-material";

export const pricingPlans = [
  {
    name: "Free",
    icon: "",
    btnText: "Sign Up - It's Free",
    desc: [
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#499557'}}/> },
      { title: "Standard and Fluency modes", icon: <Done style={{color:'#499557'}}/> },
      { title: "3 synonym options", icon: <Done style={{color:'#499557'}}/> },
      { title: "1 Freeze word or phrase", icon: <Done style={{color:'#499557'}}/> },
      { title: "1200 words in the Summarizer", icon: <Done style={{color:'#499557'}}/> },
      { title: "Faster processing speed", icon: <CloseOutlined style={{color:'#FB3F4B'}}/> },
      { title: "Advanced grammar rewrites", icon: <CloseOutlined style={{color:'#FB3F4B'}}/> },
      { title: "Compare Modes (Desktop only)", icon: <CloseOutlined style={{color:'#FB3F4B'}}/> },
      { title: "Plagiarism Checker*", icon: <CloseOutlined style={{color:'#FB3F4B'}}/> },
      { title: "Tone detection", icon: <CloseOutlined style={{color:'#FB3F4B'}}/> },
    ],
    details: "No Credit Card Required",
    background:'#499557'
  },
  {
    name: "Premium",
    icon: <DiamondOutlined style={{color:'white', marginRight:'8px'}}/>,
    btnText: "Upgrade To Premium",
    desc: [
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
      { title: "125 words in the Paraphraser", icon: <Done style={{color:'#DC9E00'}}/> },
    ],
    details: "3-Day Money-Back Guarantee",
    background:'#DC9E00'
  },
];
