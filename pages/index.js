import Badges from "@/components/badges";
import Banner from "@/components/banner";
import Plans from "@/components/plans";
import Subheader from "@/components/subheader";
import { Autocomplete, TextField } from "@mui/material";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Subheader />
      <Banner />
      <Plans />
      <Badges />
    </>
  );
}
