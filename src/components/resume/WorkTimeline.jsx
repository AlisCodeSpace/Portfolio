import React from 'react'

import '../../styles/timeline.css'
import { BookOpen01Icon } from '../../assets/icons/Icons'
import Container from '../ui/Container'

const WorkTimeline = () => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-5'>
            <Container className='w-10 h-10 mb-1'>
                <BookOpen01Icon />
            </Container>

            <h3 class="h3">Education</h3>
        </div>

        <ol className="timeline-list pl-1">

            <li class="timeline-item">

                <h4 class="h4 timeline-item-title">University school of the arts</h4>

                <span>2007 — 2008</span>

                <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
                </p>

            </li>

            <li class="timeline-item">

                <h4 class="h4 timeline-item-title">New york academy of art</h4>

                <span>2006 — 2007</span>

                <p class="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                omnis..
                </p>

            </li>

            <li class="timeline-item">

                <h4 class="h4 timeline-item-title">High school of art and design</h4>

                <span>2002 — 2004</span>

                <p class="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                magni dolores
                eos.
                </p>

            </li>

        </ol>
    </div>
  )
}

export default WorkTimeline
