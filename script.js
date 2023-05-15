const buttonMenu = document.querySelector('.button-menu')
const userButton = document.querySelector('.user-button')
const xButton = document.querySelector('.button-x')
const menu = document.querySelector('div.menu')
const areaLyric = document.querySelector('div.area-lyric')
const areaHome = document.querySelector('div.area-home')
const areaNewpaper = document.querySelector('div.area-newpaper')
const areaEvent = document.querySelector('div.area-event')
const areasDisplays = areaLyric.getElementsByTagName('div');
const spaceLyric = document.querySelector('div.space-1')
const container =  document.querySelector('div.container')
const languageRadio = document.getElementsByName('language-button')
const buttonsMenu = document.getElementsByName('buttons-menu')
const language = document.querySelector('div.language')
const lyric = document.querySelector('p.lyric')
const topPage = document.querySelector('a.top-page')
const title = document.querySelector('title#title')
const iconSvg = document.querySelector('img.icon-svg')
const iconMenu = document.querySelector('label.icon-menu')
const iconMenuList = document.getElementsByClassName('icon-menu')
var iconSvgList = document.getElementsByClassName('icon-svg')

window.addEventListener('scroll', topPageAnimation)
topPage.addEventListener('mouseover', topPageEnter)
topPage.addEventListener('mouseout', topPageOut)
topPage.addEventListener('mouseout', topPageOut)
languageRadio.forEach(element => { 
    element.addEventListener('click', languageButtons);
});
buttonsMenu.forEach(element => {
    element.addEventListener('click', buttonsMenuClick);
});

if (buttonsMenu[0].checked) {
    areaNewpaper.classList.remove("active");
    areaEvent.classList.remove("active")
    areaHome.classList.add("active")
} else if (buttonsMenu[1].checked) {
    areaNewpaper.classList.add("active");
    areaEvent.classList.remove("active")
    areaHome.classList.remove("active")
} else if(buttonsMenu[2].checked) {
    areaNewpaper.classList.remove("active");
    areaEvent.classList.add("active")
    areaHome.classList.remove("active")
}

function topPageAnimation() {
    var rollPageY = window.scrollY
    console.log(rollPageY)
    if (rollPageY >= 180) {
        topPage.classList.add('visible')
    } else {
        topPage.classList.remove('visible')
    }
}

function topPageEnter() {
    topPage.classList.add("active");
}

function topPageOut() {
    topPage.classList.remove("active");
}

function languageButtons() {
    if (languageRadio[0].checked) {
        console.log('oi 1')
        title.innerHTML = `In Your Eyes - The Weeknd - LyricsRun ♫`
        lyric.innerHTML = `Oh<br><br>
        Ooh, yeah<br><br>
        I just pretend<br>
        That I'm in the dark, and<br>
        I don't regret<br>
        'Cause my heart can't take a loss<br>
        I'd rather be so oblivious<br>
        I'd rather be with you<br><br>
        When it's said, when it's done, yeah<br>
        I don't ever wanna know<br>
        I can tell what you done, yeah<br>
        When I look at you<br><br>
        In your eyes<br>
        I see there's something burning inside you<br>
        Oh, inside you<br>
        In your eyes<br>
        I know it hurts to smile, but you try to<br>
        Oh, you try to<br><br>
        You always try to hide the pain<br>
        You always know just what to say<br>
        I always look the other way<br>
        I'm blind, I'm blind<br>
        In your eyes<br>
        You lie, but I don't let it define you<br>
        Oh, define you<br><br>
        I never lied<br>
        When I cried for you<br>
        And I know you cry too<br>
        (Know you cry too)<br>
        You're reading minds<br>
        Just couldn't deny you do<br>
        Always hard to say bye to you<br>
        (And I taught myself to say)<br><br>
        Love the way you're talkin'<br>
        Love your style, but, ooh, babe<br>
        We know that you got it from me<br>
        And it's haunting you deep<br>
        Too hard not to see it<br>
        Hate the way I feel love<br>
        Only hurts with real love<br>
        And it's taking every part of me<br>
        When you look, I could see love<br><br>
        One day, I'm giving you space<br>
        And the next day, you're giving me faces<br>
        And I like parties, not this place<br>
        It's comin' out of my bag for you to get wasted<br>
        I (Can't stop staring at you)<br>
        It's like I forgot that staring is rude<br>
        And that's what five shots could turn me into (Oh yeah)<br>
        But you've done most things that gentlemens do, so (Oh)<br><br>
        When it's said, when it's done, yeah<br>
        I would never let you know (Let you know)<br>
        I'm ashamed of what I've done, yeah<br>
        When I look at you<br><br>
        In your eyes (Your eyes)<br>
        I see there's something burning inside you (Inside you)<br>
        Oh, inside you (Oh, inside you)<br>
        In your eyes<br>
        I know it hurts to smile, but you try to (Try to)<br>
        Oh, you try to (I try to, babe)<br><br>
        You always try to hide the pain (Oh, oh)<br>
        You always know just what to say (Oh yeah)<br>
        I always look the other way<br>
        I'm blind, I'm blind<br>
        In your eyes<br>
        You lie, but I don't let it define you (Hey)<br>
        Oh, define you<br><br>
        Oh`
    } else if (languageRadio[1].checked) {
        console.log('oi 2')
        title.innerHTML = `In Your Eyes (Tradução) - The Weeknd - LyricsRun ♫`
         lyric.innerHTML = `Ah<br><br>
         Ah, sim<br><br>
         Eu apenas finjo<br>
         Que estou no escuro e<br>
         não me arrependo<br>
         Porque meu coração não pode perder<br>
         Eu prefiro ser tão alheio<br>
         Prefiro estar com você<br><br>
         Quando é dito, quando é feito, sim<br>
         Eu nunca quero saber<br>
         Eu posso dizer o que você fez, sim<br>
         Quando eu olho para você<br><br>
         Em seus olhos<br>
         Eu vejo que há algo queimando dentro de você<br>
         Ah, dentro de você<br>
         Em seus olhos<br>
         Eu sei que dói sorrir, mas você tenta<br>
         Ah, você tenta<br><br>
         Você sempre tenta esconder a dor<br>
         Você sempre sabe exatamente o que dizer<br>
         Eu sempre olho para o outro lado<br>
         eu sou cego, eu sou cego<br>
         Em seus olhos<br>
         Você mente, mas eu não deixo isso te definir<br>
         Ah, defina você<br><br>
         Eu nunca menti<br>
         Quando eu chorei por você<br>
         E eu sei que você também chora<br>
         (Saiba que você também chora)<br>
         Você está lendo mentes<br>
         Só não podia negar que você faz<br>
         Sempre difícil dizer adeus a você<br>
         (E eu me ensinei a dizer)<br><br>
         Amo o jeito que você está falando<br>
         Amo seu estilo, mas, ooh, querida<br>
         Sabemos que você conseguiu de mim<br>
         E está te assombrando profundamente<br>
         Muito difícil não ver<br>
         Odeio o jeito que eu sinto o amor<br>
         Só dói com amor verdadeiro<br>
         E está tomando cada parte de mim<br>
         Quando você olha, eu posso ver o amor<br><br>
         Um dia, estou te dando espaço<br>
         E no dia seguinte, você está me dando caras<br>
         E eu gosto de festas, não desse lugar<br>
         Está saindo da minha bolsa para você ficar bêbado<br>
         Eu (não consigo parar de olhar para você)<br>
         É como se eu tivesse esquecido que olhar é rude<br>
         E é nisso que cinco tiros podem me transformar (oh sim)<br>
         Mas você fez a maioria das coisas que os cavalheiros fazem, então (Oh)<br><br>
         Quando é dito, quando é feito, sim<br>
         Eu nunca deixaria você saber (deixar você saber)<br>
         Tenho vergonha do que fiz, sim<br>
         Quando eu olho para você<br><br>
         Em seus olhos (Seus olhos)<br>
         Eu vejo que há algo queimando dentro de você (Dentro de você)<br>
         Oh, dentro de você (Oh, dentro de você)<br>
         Em seus olhos<br>
         Eu sei que dói sorrir, mas você tenta (tenta)<br>
         Oh, você tenta (eu tento, querida)<br><br>
         Você sempre tenta esconder a dor (oh, oh)<br>
         Você sempre sabe exatamente o que dizer (oh sim)<br>
         Eu sempre olho para o outro lado<br>
         eu sou cego, eu sou cego<br>
         Em seus olhos<br>
         Você mente, mas eu não deixo isso te definir (Ei)<br>
         Ah, defina você<br><br>
         Oh` 
    }
}

function buttonsMenuClick() {
    if (buttonsMenu[0].checked) {
        areaNewpaper.classList.remove("active");
        areaEvent.classList.remove("active")
        areaHome.classList.add("active")
    } else if (buttonsMenu[1].checked) {
        areaNewpaper.classList.add("active");
        areaEvent.classList.remove("active")
        areaHome.classList.remove("active")
    } else if(buttonsMenu[2].checked) {
        areaNewpaper.classList.remove("active");
        areaEvent.classList.add("active")
        areaHome.classList.remove("active")
    }
}