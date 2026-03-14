import { NeumBlock } from "./components/NeumBlock";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-400 font-sans gap-5">
      <NeumBlock
        className="p-20"
        background="#ffffff"
        radius={15}
        distance={4}
        blur={8}
        intensity={1.2}
        inset
      />
      <NeumBlock
        className="p-40"
        background="#ffffff"
        radius={15}
        distance={4}
        blur={8}
        intensity={1.2}
        inset
      />
      <NeumBlock
        className="p-20"
        background="#ffffff"
        radius={15}
        distance={4}
        blur={8}
        intensity={1.2}
        inset
      />
    </div>
  );
}
