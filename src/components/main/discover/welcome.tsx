import { Words } from "@/components/ui/animation/Words";

export const Welcome = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex flex-col gap-8 items-center mb-8">
          <h1 className="text-4xl text-center font-bold title">
            Chào mừng bạn đến với đám cưới của chúng tôi
          </h1>
          <h2 className="text-2xl text-center font-bold">
            Chúng tôi sẽ cập nhật tin tức và thông tin mới nhất về đám cưới của
            chúng tôi tại đây.
          </h2>
        </div>
      </div>
    </section>
  );
};
