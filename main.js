const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckyDay = document.querySelector("#luckyDay")
const btnCookie = document.querySelector("#btnCookie")
const btnAgain = document.querySelector("#btnAgain")
const randomText = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "O conhecimento é a única virtude e a ignorância é o único vício.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Surpreender e ser surpreendido é o segredo do amor.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "A paciência na adversidade é sinal de um coração sensível.",
  "A sorte favorece a mente bem preparada.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
] 
btnCookie.addEventListener('click', handleCookieClick)
btnAgain.addEventListener('click', handleAgainClick)

function handleCookieClick () {
  toggleScreen()

  const aleatoryText = randomText.length
  const result = Math.floor(Math.random() * aleatoryText)
  luckyDay.innerHTML = randomText[result]
}

function handleAgainClick () {
  toggleScreen()
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

