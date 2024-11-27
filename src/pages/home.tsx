import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import dollar from "@/assets/features-icons/dollar.png";
import shield from "@/assets/features-icons/shield.png";
import phoneOff from "@/assets/features-icons/phoneOff.png";
import options from "@/assets/features-icons/options.png";
import moonex from "@/assets/moonex.png";
import uniswap from "@/assets/uniswap.png";
import check from "@/assets/tickNoTick/true.png";
import noCheck from "@/assets/tickNoTick/false.png";

const Home = () => {
  const features = [
    {
      img: dollar,
      heading: "Cheapest TXs",
      message:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      img: shield,
      heading: "CerTIK",
      message:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
    },
    {
      img: phoneOff,
      heading: "No Contract Sells",
      message: "No contract sells to fund the marketing wallets",
    },
    {
      img: options,
      heading: "CrossDex Support",
      message:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];
  const comparisons = [
    {
      comparison: "Point no one",
      moonex: check,
      uniswap: noCheck,
    },
    {
      comparison: "Point no one",
      moonex: check,
      uniswap: noCheck,
    },
    {
      comparison: "Point no one",
      moonex: check,
      uniswap: noCheck,
    },
    {
      comparison: "Point no one",
      moonex: check,
      uniswap: noCheck,
    },
    {
      comparison: "Point no one",
      moonex: check,
      uniswap: noCheck,
    },
  ];
  return (
    <div className="main-container">
      <div className="hero-foreground">
        <div className="hero-container flex flex-wrap justify-start items-center">
          <section className="hero-content flex flex-wrap flex-col justify-center items-start mt-32 ml-24 border-white p-24">
            <div className="hero-header">
              <h1 className="text-heading font-extrabold text-7xl">
                Trusted Multi-Chain <span className="special-colors">DEX</span>{" "}
                Platform
              </h1>
              <p className="text-content-message font-normal text-2xl pb-4 pt-2">
                <span>
                  Trade, earn, and own crypto on all-in-one multi-chain DEX
                </span>
              </p>
            </div>
            <div className="hero-action-btns flex flex-wrap gap-6 mt-6 font-semibold">
              <Link to={`/connect-wallet`} className="gradient-a text-black">
                Connect Wallet
              </Link>
              <Link to={`/trade`} className="border-a">
                Trade Crypto
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div className="about-section-container py-10">
        <div className="font-extrabold text-5xl md:ml-56 ml-10">
          Why <span className="special-colors">MoonEX?</span>
        </div>
        <div className="comparison-table-container mx-auto my-24">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Comparison</th>
                <th className="moonex-table flex flex-wrap justify-center items-center">
                  <img src={moonex} alt="logo-icon" width={279} height={79} />
                </th>
                <th>
                  <img
                    src={uniswap}
                    alt="uniswap-logo"
                    width={178}
                    height={45}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison) => {
                return (
                  <tr>
                    <td>
                      {comparisons.indexOf(comparison) + 1}.{" "}
                      {comparison.comparison}
                    </td>
                    <td>
                      <img
                        src={comparison.moonex}
                        alt="check"
                        width={26.25}
                        height={21.39}
                      />
                    </td>
                    <td>
                      <img
                        src={comparison.uniswap}
                        alt="no-check"
                        width={22.92}
                        height={22.92}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="text-center font-extrabold text-5xl my-20">
          Our <span className="special-colors">Features</span>
        </div>
        <div className="features-container flex flex-wrap justify-center items-center gap-10">
          {features.map((feature) => {
            return (
              <div className="feature-card flex flex-wrap flex-col justify-center p-3 cursor-pointer hover:opacity-60 transition-all">
                <div className="icon-container">
                  <img
                    src={feature.img}
                    alt="feature-icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="feature-heading font-semibold text-xl pt-2 pb-2">
                  <span>{feature.heading}</span>
                </div>
                <div className="feature-message">
                  <span>{feature.message}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faqs-section-container py-40">
        <div className="faqs-section mx-auto flex flex-wrap justify-center items-start">
          <div className="faqs-content max-w-max p-20">
            <div className="faqs-heading text-center font-extrabold text-5xl special-colors">
              FAQs
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I get a Referral Code?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I get rewarded in tokens or ETH when I refer buyers?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I get a Referral Code?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
