import Section from "@/components/ui/Section";
import { Words } from "@/components/ui/animation/Words";
import React from "react";

export const Question = () => {
  return (
    <Section>
      <div className="container my-16 py-16 flex flex-col items-center gap-16">
        <h1 className="text-4xl text-center font-bold title">
          <Words value="Câu hỏi" />
        </h1>
        <div className="flex flex-col gap-8">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Tôi có thể đến trễ không?
            </div>
            <div className="collapse-content">
              <p>
                Đám cưới sẽ bắt đầu chính xác vào lúc 11:00 sáng, vì vậy xin vui
                lòng đến đúng giờ để không bỏ lỡ bất kỳ phần nào trong chương
                trình của chúng tôi.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Tôi có thể dẫn theo người khác không?
            </div>
            <div className="collapse-content">
              <p>
                Đương nhiên! Chúng tôi rất vui mừng nếu bạn muốn dẫn theo người
                thân, bạn bè hoặc người yêu của mình.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Nếu tôi không thể đến được thì sao?
            </div>
            <div className="collapse-content">
              <p>
                Đừng lo lắng! Chúng tôi sẽ cung cấp phần trực tiếp trên trang
                web của chúng tôi để bạn có thể xem trực tiếp từ bất kỳ đâu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
