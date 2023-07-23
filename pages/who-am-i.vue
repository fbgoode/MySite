<template>
    <div id="title" class="index container mt-5">
        <h1 class="display-3">Who am I?</h1>
        <p class="lead">
            Discover the main life events that make me who I am.
        </p>
        <hr class="mt-5">
    </div>
    <Timeline tldr="I'm just a curious and ambitious guy who's passionate about tech and likes traveling, keeping a healthy lifestyle and spending time with friends & family.">
        <Event
            title="Born in Buenos Aires, Argentina"
            icon-path="/img/born.svg"
            :disable-animation="true"
        />
        <EventDate>1990</EventDate>
        <Event
            icon-path="/img/lego.svg"
            sub-title="Growing up, my main hobbies were playing with Legos, tinkering on our family's PC and taking apart mechatronic toys to use the components in my own creations."
        />
        <EventDate>2002</EventDate>
        <Event
            title="Moved with my family to Madrid, Spain"
            icon-path="/img/alcala-gate.svg"
            sub-title="Largely due to the 1998-2002 Argentine great depression."
        />
        <EventDate>2003</EventDate>
        <Event
            icon-path="/img/rugby.svg"
            sub-title="During adolescence and young adulthood I played Rugby and captained my team."
        >
            <template #description>
                <small>Rugby taught me the values of Teamwork, Respect, Discipline and Sportsmanship.</small>
            </template>
        </Event>
        <Event
            icon-path="/img/programming.svg"
            sub-title="I developed a passion for engineering and programming."
        >
            <template #description>
                <small>I've always been very curious and loved building things. I taught myself programming in Visual Basic at age 12, built my father's business' website at age 14, made a photo viewing web app for a wedding at 15 and at 17 I developed a mobile game starring my brother as a graduation gift.</small>
            </template>
        </Event>
        <EventDate>2012</EventDate>
        <Event
            title="Moved to Stockholm, Sweden"
            icon-path="/img/stockholm.svg"
            sub-title="I completed a double engineering degree program and graduated in Stockholm's iconic Town Hall."
        />
        <EventDate>2014</EventDate>
        <Event
            title="Moved to Gothenburg, Sweden"
            icon-path="/img/poseidon.svg"
        >
            <template #description>
                <small>I took advantage of a great work opportunity and got immersed in Swedish society. Living with a different culture made me more adaptable and a better listener.</small>
            </template>
        </Event>
        <Event
            title='Completed a "Swedish Classic"'
            icon-path="/img/ski.svg"
        >
            <template #description>
                <small>The Swedish Classic consists of four endurance races (<a href="https://vasaloppet.se/en/" target="_blank">cross country skiing</a>, <a href="https://vatternrundan.se/en/" target="_blank">cycling</a>, <a href="http://vansbrosimningen.se/en/vansbrosimningen-eng/" target="_blank">swimming</a> and <a href="https://www.lidingoloppet.se/en-GB/" target="_blank">trail running</a>) to be completed within a 12-month period. I also ran <a href="https://www.athensauthenticmarathon.gr/site/index.php/en/" target="_blank">Athen's original marathon</a>.</small>
            </template>
        </Event>
        <EventDate>2017</EventDate>
        <Event
            title="Took a sabattical"
            icon-path="/img/passport.svg"
            sub-title="Backpacked and volunteered."
        >
            <template #description>
                <small>I taught children in the biggest favela in Rio de Janeiro while <a href="https://www.businessinsider.com/r-brazil-army-deploys-in-rio-slum-as-drug-related-violence-worsens-2017-9" target="blank">a cartel war took place</a>. I worked with a local NGO in rural India to empower young women at risk of illiteracy. I motorcycled Vietnam north to south. I travelled to Brazil, Peru, Bolivia, Argentina, Chile, Colombia, Ecuador, India, Nepal, Myanmar, Laos, Cambodia, Vietnam, Thailand, Malasia and Indonesia, mostly by land, and spent less than 13€ / day in average.</small>
            </template>
        </Event>
        <EventDate>2018</EventDate>
        <Event
            title="Moved back to Madrid and started a business"
            icon-path="/img/startup2.svg"
        >
            <template #description>
                <small>Missing my family and the enviable Spanish weather I decided to move back from Sweden.<br/>My experience as an entrepreneur was tough and ultimately unsuccesful but extremely fruitful in terms of self development.</small>
            </template>
        </Event>
        <EventDate>2020</EventDate>
        <Event
            title="Moved to Valencia and embraced my passion for software"
            icon-path="/img/valencia.svg"
        >
            <template #description>
                <small>Software Engineering had always been part of my work. I's what I always enjoyed the most, so I decided to fully focus my career on it.<br/>I plan to stay in Valencia long term. I love the city and it's close to most of my loved ones.</small>
            </template>
        </Event>
        <EventDate>2022</EventDate>
        <Event
            title="I ran a sub-3-hour marathon"
            icon-path="/img/run.svg"
            sub-title="*cough* showoff *cough*"
        />
        <Event
            title="I became a father"
            icon-path="/img/baby.svg"
            sub-title="What an incredible, life-changing experience."
        />
        <EventDate>2023</EventDate>
        <Event
            icon-path="/img/checklist.svg"
            sub-title="Hey! I'm really enjoying this journey."
        >
            <template #description>
                <small>The three pillars of my happiness:<br/><div class="px-3">✓ Spending time with my loved ones,<br/>✓ Personal and professional development and<br/>✓ Keeping a healthy lifestyle.</div></small>
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
    title: 'Federico Baez - Who am I?'
});
</script>