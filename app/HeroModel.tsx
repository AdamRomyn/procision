import Spline from "@splinetool/react-spline/next";

const SCENE_URL = "https://prod.spline.design/JmLPo3wJGCntwN9w/scene.splinecode";

export default function HeroModel() {
  return (
    <div className="hero-media">
      <Spline scene={SCENE_URL} className="spline-stage" />
    </div>
  );
}
