import { donationCategories, donateCopy } from "../../data/content";
import { useTranslate } from "../../i18n/LanguageContext";

export default function DonateCTA() {
  const tr = useTranslate();
  return (
    <section id="donate" className="section donate">
      <div className="container donate-box">
        <div>
          <p className="eyebrow">{tr(donateCopy.eyebrow)}</p>
          <h2>{tr(donateCopy.heading)}</h2>
          <p>{tr(donateCopy.body)}</p>
        </div>
        <div className="donation-buttons">
          {donationCategories.map((category) => (
            <button type="button" key={category.en}>{tr(category)}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
