/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Halloween and Lorem Ipsum',
    date: 'Oct 30, 2019',
    firstParagraph: 'You gotta read it to believe it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit nec orci nec porttitor. Vestibulum volutpat erat at magna pharetra cursus. Morbi lacus metus, porta id dui pellentesque, consequat elementum erat. Sed eu justo sit amet odio placerat iaculis eget ut nulla. Aliquam at lectus vitae ipsum viverra laoreet. Donec vestibulum bibendum sagittis. Ut convallis tristique faucibus. Nulla facilisi. Phasellus gravida sodales tortor, ut consectetur nisl dapibus quis. Aenean id lectus turpis. Nullam congue, est ut lacinia bibendum, est libero sollicitudin metus, at rutrum enim erat et est. Suspendisse pharetra elit velit, a viverra ante varius vel. Sed ut lacus in libero rutrum commodo eu sit amet ante.',
    secondParagraph: 'In facilisis lectus ut orci consequat blandit. Proin enim libero, sollicitudin sit amet bibendum et, consectetur at enim. Donec ornare ipsum non lectus fringilla egestas. Curabitur felis orci, elementum pretium pretium in, dictum suscipit dui. Ut condimentum mollis tristique. Suspendisse nisi risus, pellentesque id pretium vel, pretium in elit. Proin imperdiet ut nunc sed aliquam. Pellentesque non augue risus. Aenean et enim congue, finibus nulla vel, sodales diam. Integer consectetur pellentesque consequat. Cras eleifend nisi nulla, sit amet mollis sapien maximus quis. Etiam ullamcorper turpis gravida congue volutpat. Fusce ipsum mauris, euismod ut tempor quis, scelerisque non quam. Etiam ut sapien elit. Etiam euismod vehicula libero, at sollicitudin lacus facilisis vitae. Suspendisse vitae rutrum tortor.',
    thirdParagraph: 'Vivamus sit amet nibh sed ex bibendum mattis. Nam lectus arcu, consequat vitae ipsum sit amet, accumsan egestas tortor. Mauris nec rhoncus tellus. Nam fermentum metus sed metus viverra, non posuere ligula eleifend. Integer viverra id lorem ut condimentum. Phasellus hendrerit mi sit amet tortor ornare pretium. Pellentesque accumsan ac felis sed maximus. Praesent vehicula diam ac lacus scelerisque, sed lobortis arcu viverra.'
  },{
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

const articleContainer = document.querySelector('.articles');

data.forEach(item => {
  articleContainer.appendChild(createArticle(item.title, item.date, item.firstParagraph, item.secondParagraph, item.thirdParagraph));
})

const clip = new Audio('../assets/Deleted.mp3');

function createArticle(title, date, fP, sP, tP){
  const article = document.createElement('div');
    article.classList.add('article')
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
    articleDate.classList.add('date');
  const articleClose = document.createElement('a');
    articleClose.classList.add('close');
    articleClose.textContent = '\u0078';
    articleClose.href = '#';
    articleClose.style.color = 'white';
    articleClose.style.backgroundColor = 'red';
    articleClose.style.padding = '.1125rem .25rem';
    articleClose.style.borderRadius = '25%'
    articleClose.style.textDecoration = 'none';
  const articlePst = document.createElement('p');
  const articlePnd = document.createElement('p');
  const articlePrd = document.createElement('p');
  const articleExpand = document.createElement('span')
    articleExpand.classList.add('expandButton');
    articleExpand.textContent = '\u21B7';


  article.append(articleTitle, articleDate, articleClose, articlePst, articlePnd, articlePrd, articleExpand);

  articleTitle.textContent = title;
  articleDate.textContent = date;
  articlePst.textContent = fP;
  articlePnd.textContent = sP;
  articlePrd.textContent = tP;
  
  articleExpand.addEventListener('click', () => {
    article.classList.toggle('article-open');
    article.style.transition = 'height 2.5s';
    if(article.classList.contains('article-open')){
      articleExpand.style.transform = "scale(1, -1)";
    }else{
      articleExpand.style.transform = "scale(-1, 1)";  
    }
  });

  articleClose.addEventListener('click', () => {
    TweenMax.to(article, .5, {autoAlpha: 0, display: 'none'})
    clip.play();
  });

  return article;
}

// Add button to header
const myButton = document.createElement('a');
myButton.href = '#';
myButton.title = 'Create New Article';
myButton.style.textDecoration = 'none';
myButton.style.backgroundColor = "white"
myButton.style.color = '#388E3C';
myButton.style.fontSize = "2rem";
myButton.style.padding = ".1125rem .5rem";
myButton.style.marginLeft = "8rem";
myButton.textContent = '\u002B';

document.querySelector('.header').appendChild(myButton);

myButton.addEventListener('click', (e) => {
  e.preventDefault();
  anotherArticle = new NewArticle(data[Math.floor(Math.random() * data.length)]).add();
})

function NewArticle(articleData) {
  addArticle = articleData;
  this.title = articleData.title;
  this.date = articleData.date;
  this.pOne = articleData.firstParagraph;
  this.pTwo = articleData.secondParagraph;
  this.pThree = articleData.thirdParagraph;

  this.add = function() {
    let myArticle = createArticle(this.title, this.date, this.pOne, this.pTwo, this.pThree);
    document.querySelector('.articles').prepend(myArticle);
  }
    
}


/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
