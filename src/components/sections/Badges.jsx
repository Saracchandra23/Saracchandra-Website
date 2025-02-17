import { RevealOnScroll } from '../RevealOnScroll';

export const Badges = () => {
  return (
    <section id="badges" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <h1>Coding Badge</h1>
            <img
              src="Saracchandra-Website/src/assets/leetcode100.png"
              alt="Leetcode 100 Day Badge"
              style={{ width: '300px', borderRadius: '10px' }}
            />
          </div>
          <div>
            <h1>AWS Developer Certificate</h1>
            <img
              src="Saracchandra-Website/src/assets/aws-certified-developer-associate.png"
              alt="AWS Certified Developer Associate"
              style={{ width: '300px', borderRadius: '10px' }}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
