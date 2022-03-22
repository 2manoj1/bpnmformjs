import type { NextPage } from "next";
import dynamic from "next/dynamic";

// dynamic static components
const FormViewerC = dynamic(() => import("../components/formViewer"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <FormViewerC />
    </div>
  );
};

export default Home;
