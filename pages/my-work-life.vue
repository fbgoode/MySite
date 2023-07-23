<template>
    <div id="title" class="index container mt-5">
        <h1 class="display-3">My work life</h1>
        <p class="lead">
            Go through my professional and academic life in chronological order.
        </p>
        <hr class="mt-5">
        <p class="text-muted"><small>
                If you're looking for a more traditionally formatted résumé, visit <a
                    href="https://www.linkedin.com/in/federicobaez/" target="_blank">my LinkedIn page</a> or <a
                    href="mailto:info@fbaez.com?subject=CV%20enquiry&body=Hi%20Federico,%0D%0AI%27d%20like%20you%20to%20please%20send%20me%20your%20CV."
                    target="_blank">ask me for my CV</a>.
            </small>
        </p>
    </div>
    <Timeline tldr="I'm an Engineer and MBA with entrepreneurship and Software Development experience.">
        <Event
            title="Graduated High School with Honors"
            icon-path="/img/graduation-hat.svg"
            sub-title="GPA: 9.3/10"
            :disable-animation="true"
        />
        <EventDate>2008</EventDate>
        <Event
            title="Industrial Engineer degree"
            icon-path="/img/diploma.svg"
            sub-title="At Universidad Politécnica de Madrid"
            plainDescription="Through this master's level degree I became a diligent problem solver and learned to work hard and effectively under pressure."
            location-logo-path="/img/UPM.png"
        >
            <template #details>
                <ul>
                    <li> Honors in Computer Science </li>
                    <li> Worked as an intern in the Computer Science department </li>
                    <li> Top mark on master's thesis </li>
                    <li> Captained and managed the university's rugby team </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>According to the <a href="https://www.elmundo.es/especiales/2008/05/cultura/50carreras/concertados.html">annual university ranking conducted by El Mundo</a>, at the time the Technical University of Madrid ranked as the top technical university in Spain, and second overall. The majority of its Engineering Schools are consistently ranked as leading academic institutions in Spain in their fields, and among the very best in Europe.</small>
            </template>
        </Event>
        <Event
            title="MScEng Mechanical Engineer degree"
            icon-path="/img/diploma.svg"
            sub-title="At KTH Royal Institute of Technology, Stockholm"
            plainDescription="The Swedish pragmatic approach to education perfectly complemented my home institution's."
            location-logo-path="/img/KTH.svg"
        >
            <template #details>
                <p>I went to Stockholm on a two year long double degree exchange program.</p>
                <ul>
                    <li> Achieved a GPA of <b>A</b></li>
                    <li> My master's thesis on the use of optimization algorithms on vehicle suspension control won Best Master's Thesis work 2014 on the Swedish Forestry Research Institute. My work was published by the <a href="https://www.istvs.org/">International Society for Terrain-vehicle Systems</a>. </li>
                    <li> Developed a software tool to assist engineers in the <abbr title="Internal Combustion Engine">ICE</abbr> camshaft design process. </li>
                    <li> Designed and built a testing machine for the tribology department. Coded it's <abbr title="Data acquisition">DAQ</abbr> and control software. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>KTH Royal Institute of Technology is the largest and most respected technical university in Sweden, ranked top 100 in the 2021 QS World University Rankings.</small>
            </template>
        </Event>
        <EventDate>2014</EventDate>
        <Event
            title="Volvo Engineering Graduate Program"
            icon-path="/img/VEGP.svg"
            sub-title="At Volvo Car Group, Gothenburg"
            plainDescription="I got selected from a pool of 800+ candidates to take part in the program and work on the latest innovative technologies."
            location-logo-path="/img/VCC.jpg"
        >
            <template #details>
                <ul>
                    <li> Developed a software tool which greatly improved interdepartmental efficiency. </li>
                    <li> Worked in secret (at the time) projects in collaboration with Uber and Polestar. </li>
                    <li> Worked as a <abbr title="Computer Assisted Engineering">CAE</abbr> Engineer at the Vehicle dynamics &amp; Passive Safety departments. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>Volvo has created world-changing innovations since their first car rolled off the production line in 1927. The modern seatbelt. The side impact protection system. The pedestrian detection system. Today, Volvo Cars is one of the most respected and innovative premium car brands.</small>
            </template>
        </Event>
        <EventDate>2016</EventDate>
        <Event
            title="First Engineer"
            icon-path="/img/automotive.svg"
            sub-title="At Volvo Car Group, Gothenburg"
            plainDescription="I was responsible for Volvo's new vehicle suspensions at the system level."
            location-logo-path="/img/VCC.jpg"
        >
            <template #details>
                <ul>
                    <li> R&amp;D responsible for mechanical design of vehicle suspensions for the Volvo SPA platform, which raised Volvo cars to the premium category and was awarded “Car of the year" 2018, among other recognitions. </li>
                    <li> CAE Lead. Improved efficiency of the development process through the introduction of CAE methods in the department. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>Volvo has created world-changing innovations since their first car rolled off the production line in 1927. The modern seatbelt. The side impact protection system. The pedestrian detection system. Today, Volvo Cars is one of the most respected and innovative premium car brands.</small>
            </template>
        </Event>
        <EventDate>2017</EventDate>
        <Event
            title="Volunteering"
            icon-path="/img/help.svg"
            sub-title="Around the world"
            plainDescription="I volunteered at three NGOs and planned to start a business while backpacking during a sabattical."
        >
            <template #details>
                <ul>
                    <li> I realised I wanted to start a business, so I started building knowledge on the subject and planning for it. </li>
                    <li> Taught myself web development through online courses. </li>
                    <li> Taught 6-15 year olds English, <abbr title="Science, Technology, Engineering &amp; Mathematics">STEM</abbr> and Programming at <a href="http://www.projectfavela.org/">Project Favela</a> in Brazil. </li>
                    <li> Computer Science teacher and fundraising for <a href="http://agsamiti.org/">Adi Gram Samiti</a> in India. </li>
                    <li> Managed a stray dog foster home for <a href="https://happydogskohchang.org/">Happy Dogs Koh Chang</a> in Thailand. </li>
                </ul>
            </template>
        </Event>
        <EventDate>2018</EventDate>
        <Event
            title="Founder, CEO, Developer"
            icon-path="/img/startup.svg"
            sub-title="At iupibox, Madrid"
            plainDescription="Bootstrapped digital startup with 1400+ customers."
            location-logo-path="/img/iupi.png"
        >
            <template #details>
                <ul>
                    <li> Built a web app to sell food products and subscriptions. Automated logistics, marketing and support processes. </li>
                    <li> Built and managed a multidisciplinary team of 4. Oversaw marketing and commercial operations. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>IUPIBOX offered a monthly subscription service for vegans, vegetarians and veg-curious foodies. In parallel, IUPIBOX carried out sampling marketing and market research services for some of the largest vegan and organic food brands in Spain.</small>
            </template>
        </Event>
        <Event
            title="Executive MBA"
            icon-path="/img/diploma.svg"
            sub-title="At Universitat Oberta de Catalunya"
            plainDescription="Through this degree I developed a holistic business oriented mindset."
            location-logo-path="/img/UOC.png"
        >
            <template #details>
                <ul>
                    <li> Specialised on Entrepreneurship &amp; Innovation. </li>
                    <li> Worked on a business plan for my digital startup. </li>
                    <li> Attended various trainings to improve soft skills for managers. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>According to the <a href="http://rankingfso.org/fso/ranking-2019">FSO higher education ranking</a>, UOC's Executive MBA is considered the best Spanish language online MBA program in the world.</small>
            </template>
        </Event>
        <EventDate>2021</EventDate>
        <Event
            title="Full Stack Engineer"
            icon-path="/img/lw-dev.svg"
            sub-title="At Languagewire, Valencia"
            plainDescription="I decided to focus my career on tech and took a developer job for an industry leading Language Services Platform."
            location-logo-path="/img/LW.svg"
        >
            <template #details>
                <ul>
                    <li> Developed both Languagewire's core web application and microservices in an agile multicultural team. </li>
                    <li> Took business critical SSO service to production. </li>
                    <li> Led development of healthcheck service from idea to production to support service availability KPIs. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>Trusted by leading global enterprises such as H&M, Daimler or L'Oreal, Languagewire offers a language management ecosystem which brings together advanced AI and human expertise to easily and effectively manage content localization.</small>
            </template>
        </Event>
        <EventDate>2022</EventDate>
        <Event
            title="Engineering Team Lead"
            icon-path="/img/lw-dev.svg"
            sub-title="At Languagewire, Valencia"
            plainDescription='Built and currently leading a new Agile team of 4 in the Core Platform "tribe".'
            location-logo-path="/img/LW.svg"
        >
            <template #details>
                <ul>
                    <li> My team co-develops, maintains and runs the core app of the business, which handles 1000s of requests per minute. </li>
                    <li> Migrated services to the cloud to gain agility and reduce risks. </li>
                    <li> Supported the cultural and technical shift to a unified development process across the company. </li>
                    <li> Achieved the best team satisfaction score in the division. </li>
                </ul>
            </template>
            <template #locationDescription>
                <small>Trusted by leading global enterprises such as H&M, Daimler or L'Oreal, Languagewire offers a language management ecosystem which brings together advanced AI and human expertise to easily and effectively manage content localization.</small>
            </template>
        </Event>
        <EventDate :disable-animation="true">Now</EventDate>
    </Timeline>
</template>

<script setup>
import Timeline from '~/components/Timeline.vue';
import Event from '~/components/Event.vue';
import EventDate from '~/components/EventDate.vue';

useHead({
    title: 'Federico Baez - My work life'
});
</script>