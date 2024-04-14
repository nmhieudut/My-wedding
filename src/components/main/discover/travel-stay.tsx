"use client";
import Section from "@/components/ui/Section";
import { Words } from "@/components/ui/animation/Words";

export const TravelStay = () => {
  return (
    <Section>
      <div className="container py-16">
        <div className="flex flex-col items-center w-full justify-center gap-5">
          <h1 className="text-4xl text-center font-bold title"></h1>
          <div className="flex w-full justify-center gap-10 flex-col md:flex-row">
            <h3 className="text-6xl flex-1 font-bold">
              <Words value="Ngày cưới" />
              <Words value="&" />
              <Words value="Nơi tổ chức" />
            </h3>

            <div className="flex flex-1 flex-col gap-4 items-center md:items-start">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">
                  <Words value="Where to join?" />
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.4197535417456!2d108.47293987587783!3d15.569206285040131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dd049c61dce3%3A0x55d5a0b8a50686b6!2zTmjDoCBow6BuZyBUaOG7i25oIFBow6F0!5e0!3m2!1sen!2s!4v1713089262199!5m2!1sen!2s"
                  width="400"
                  height="300"
                  style={{ border: 1 }}
                  loading="lazy"
                />
              </div>
              <div className="text-lg font-bold">
                <Words value="Address" />
              </div>
              <div className="text-lg">
                <Words
                  value="Nhà hàng Thịnh Phát
96-98 Hùng Vương, Phường An Mỹ, Tam Kỳ, Quảng Nam"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
