import { donationCategories } from "../../data/content";

export default function DonateCTA() {
  return (
    <section id="donate" className="section donate">
      <div className="container donate-box">
        <div>
          <p className="eyebrow">Support the Mission</p>
          <h2>Help spread authentic Islamic knowledge.</h2>
          <p>
            Your support powers Dawah, research, education, welfare, Qur'an distribution, books,
            and the future AI Da'ee.
          </p>
        </div>
        <div className="donation-buttons">
          {donationCategories.map((category) => (
            <button type="button" key={category}>{category}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
