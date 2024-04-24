"use client";
import Section from "@/components/ui/Section";
import { LeftSide } from "@/components/ui/animation/LeftSide";
import { RightSide } from "@/components/ui/animation/RightSide";
import { Words } from "@/components/ui/animation/Words";

export const TravelStay = () => {
  return (
    <Section>
      <div className="container py-16">
        <div className="flex flex-col items-center w-full justify-center gap-5">
          <h1 className="text-4xl text-center font-bold title"></h1>
          <div className="flex w-full justify-center gap-10 flex-col">
            <h3 className="text-6xl flex-1 font-bold">
              <Words value="Ngày cưới & Nơi tổ chức" />
            </h3>
            <div className="flex flex-1 flex-col gap-4 items-center md:items-start">
              <div className="flex flex-col gap-4">
                <div className="text-lg font-bold">
                  <Words value="Địa chỉ" />
                </div>
                <div className="text-lg">
                  <Words
                    value="Nhà hàng Thịnh Phát
96-98 Hùng Vương, Phường An Mỹ, Tam Kỳ, Quảng Nam"
                  />
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7686.839517738467!2d108.47551500000002!3d15.569205999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dd049c61dce3%3A0x55d5a0b8a50686b6!2zTmjDoCBow6BuZyBUaOG7i25oIFBow6F0!5e0!3m2!1sen!2sus!4v1713458990469!5m2!1sen!2sus"
                  width="800"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
