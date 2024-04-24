import { Words } from "@/components/ui/animation/Words";

export const Welcome = () => {
  return (
    <section>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
          />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </section>
  );
};
