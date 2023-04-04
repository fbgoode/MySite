<template>
    <div id="titulo" class="index container mt-5">
        <h1 class="display-3">Who am I?</h1>
        <p class="lead">
          Discover the main life events that made me who I am in chronological order.
        </p>
        <hr class="mt-5">
      </div>
      <!----------------- MY WORK LIFE ----------------->
      <div id="myWorkLifeContainer" class="container-fluid">
      <div id="myWorkLife" class="container my-5 timelineWidget">

        <div class="row p-3 pe-4 mb-5">
          <div class="card p-0 cardTLDR">
            <div class="card-body py-2">
              <p class="TLDR"><small><b><abbr title="Too Long, Didn't Read">TL;DR:</abbr></b> I'm just a curious, tech-passionate guy who likes traveling, keeping a healthy lifestyle and hanging out with friends & family.</small></p>
            </div>
          </div>
        </div>

        <div class="row">

          <div id="timeLine" class="col-auto align-self-stretch d-flex flex-column px-0">
            <div class="timeStart timeLine"></div>
            <div class="timeMid timeLine"></div>
            <div class="timeEnd timeLine"></div>
          </div>

          <div id="events" class="col ps-0">

            <div class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgBORN" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Born in Buenos Aires, Argentina</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate1" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">1990</div>
              </div>
            </div>

            <div id="event1" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgLego" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h6 class="card-subtitle text-muted">Growing up, my main hobbies were playing with Legos, tinkering on our family's PC and taking apart mechatronic toys to use the components on my own creations.</h6>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="eventSpacer h2 container">
              <div id="eventDate2" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2002</div>
              </div>
            </div>
            
            <div id="event2" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgMadrid" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Moved to Madrid, Spain</h5>
                    <h6 class="card-subtitle text-muted">Largely due to the 1998-2002 Argentine great depression</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate3" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2003</div>
              </div>
            </div>
            
            <div id="event3" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgRugby" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h6 class="card-subtitle text-muted">As an adolescent I spent a lot of time playing Rugby and became my team's captain.</h6>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>Rugby taught me the values of Teamwork, Respect, Discipline and Sportsmanship.</small></p>
              </div>
            </div>
            <div id="event3-2" class="card event mt-3">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgScience" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h6 class="card-subtitle text-muted">I'm extremely curious and I love science.</h6>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>I've always loved to learn new things, mainly in the realm of the sciences. My favorite podcast is <a href="https://www.theskepticsguide.org/" target="_blank">The Skeptic's Guide to the Universe</a>.</small></p>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate4" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2012</div>
              </div>
            </div>

            <div id="event4" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgStockholm" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Moved to Stockholm, Sweden</h5>
                    <h6 class="card-subtitle text-muted">I studied for 2 years and graduated in Stockholm's iconic Town Hall after completing a double-degree program.</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate5" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2014</div>
              </div>
            </div>

            <div id="event5" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgGothenburg" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Moved to Gothenburg, Sweden</h5>
                    <h6 class="card-subtitle text-muted">And worked there for 3 years.</h6>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>I absorbed some aspects of the Swedish culture: <i>anti-extremism, first listen - then talk, be good to your neighbor even when they aren't watching</i>. But ended up deciding it wasn't my ideal home due to the long dark winter, the distance to my family and lifelong friends, and the difficulty of intercultural connection</small></p>
              </div>
            </div>
            <div id="event5-2" class="card event mt-3">
              <!-- <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgVeg" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Became a vegetarian</h5>
                    <h6 class="card-subtitle text-muted">But don't worry, not one of those judgy annoying types.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div id="event5-3" class="card event mt-3"> -->
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgRun" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Completed a <i>Swedish Classic</i></h5>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>The Swedish Classic is a diploma awarded to those who have finished a series of endurance races in four disciplines (<a href="https://results.vasaloppet.se/2021/?content=detail&fpid=search&pid=search&idp=9999991678885A000021D285&lang=SE&event=%C3%96SS_9999991678885A00000004A0" target="_blank">cross country skiing</a>, <a href="https://vatternrundan.se/en/participants-results/" target="_blank">cycling</a>, <a href="http://vansbrosimningen.se/en/vansbrosimningen-eng/" target="_blank">swimming</a> and <a href="https://www.lidingoloppet.se/" target="_blank">cross country running</a>) during a 12-month period. I also ran <a href="https://track.myrace.gr/ibibcard.aspx?id=148500" target="_blank">Athen's original marathon</a>.</small></p>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate6" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2017</div>
              </div>
            </div>

            <div id="event6" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgTravel" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Took a sabattical year</h5>
                    <h6 class="card-subtitle text-muted">Backpacked South America + Southeast Asia and volunteered</h6>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>I taugh children in the biggest favela in Rio de Janeiro, Brazil, while <a href="https://www.businessinsider.com/r-brazil-army-deploys-in-rio-slum-as-drug-related-violence-worsens-2017-9" target="blank">a huge cartel war took place</a>. I worked with a local NGO in rural Haryana, India, to empower young disadvantaged women at risk of illiteracy. I motorcycled Vietnam north to south. I travelled to Brazil, Peru, Bolivia, Argentina, Chile, Colombia, Ecuador, India, Nepal, Myanmar, Laos, Cambodia, Vietnam, Thailand, Malasia and Indonesia, mostly by land, and spent less than 13€ / day in average.</small></p>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate7" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2018</div>
              </div>
            </div>

            <div id="event7" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgSTARTUP" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Moved back to Madrid and started a business</h5>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>My first experience as an entrepreneur was hard and ultimately unsuccesful but extremely fruitful in terms of education.</small></p>
              </div>
            </div>

            <div class="eventSpacer h2 container">
              <div id="eventDate8" class="eventDateContainer row">
                <div class="lineLeft col-1">
                </div>
                <div class="eventDate h2 col">2020</div>
              </div>
            </div>

            <div id="event8" class="card event">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgValencia" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h5 class="card-title">Moved to Valencia and decided to focus on software development</h5>
                  </div>
                </div>
                <p class="card-text mt-3 mb-2"><small>Programming has been present throughout my career and I thoroughly enjoy it.</small></p>
              </div>
            </div>
            <div id="event8-2" class="card event mt-3">
              <div class="card-body">
                <div class="row cardTitleContainer">
                  <div class="col-auto p-0">
                    <div id="imgList" class="eventIcon"></div>
                  </div>
                  <div class="col p-0">
                    <h6 class="card-subtitle text-muted">My current priorities are my family, keeping a healthy lifestyle and my professional growth in the IT sector.</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Federico Baez - Who am I?',
        script: [
            { src: '/js/who-am-i.js', defer: true, body: true }
        ]
    })
</script>