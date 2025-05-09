import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Globe, Bomb, Heart, Users, Radiation } from 'lucide-react';

export default function LifeTimeline() {
  return (
    <section className="my-24 px-4" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className="text-white text-3xl font-bold text-center mb-12">
        Timeline of Anneke's Life
      </h2>

      <VerticalTimeline lineColor="#3B82F6">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1947"
          iconStyle={{ background: '#3B82F6', color: '#fff' }}
          icon={<Users />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-lg">Birth</h3>
          <p>Born in Koudekerk aan den Rijn, Netherlands.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1956"
          iconStyle={{ background: '#1E3A8A', color: '#fff' }}
          icon={<Globe />}
        >
          <h3 className="font-bold text-lg">Hungarian Uprising</h3>
          <p>First exposure to international conflict through refugee stories.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1961"
          iconStyle={{ background: '#1E40AF', color: '#fff' }}
          icon={<Bomb />}
        >
          <h3 className="font-bold text-lg">Berlin Wall Built</h3>
          <p>Became aware of political division in Europe.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1969"
          iconStyle={{ background: '#2563EB', color: '#fff' }}
          icon={<Globe />}
        >
          <h3 className="font-bold text-lg">First Moon Landing</h3>
          <p>Global awe at scientific progress; marks the Space Race.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1980s"
          iconStyle={{ background: '#4F46E5', color: '#fff' }}
          icon={<Radiation />}
        >
          <h3 className="font-bold text-lg">Nuclear Protest Movement</h3>
          <p>Witnessed anti-nuclear protests in the Netherlands.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="1989"
          iconStyle={{ background: '#6D28D9', color: '#fff' }}
          icon={<Heart />}
        >
          <h3 className="font-bold text-lg">Fall of the Berlin Wall</h3>
          <p>Marked the symbolic end of the Cold War Anneke lived through.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#111827', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #3B82F6' }}
          date="Present"
          iconStyle={{ background: '#22C55E', color: '#fff' }}
          icon={<Users />}
        >
          <h3 className='font-bold text-lg'>Present</h3>
          <p>We are now in the Present</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}