Hoje eu quero iniciar uma série de conteúdos sobre como é trabalhar em uma Big Tech e como aprendo com isso todos os dias. E como dizem, compartilhar é aprender de novo, então, vamos juntos.

## Contexto

Entrei no Meli há 3 anos. Na época já tinha mais de 10 anos de experiência na área de desenvolvimento. Mesmo assim muitas coisas me surpreenderam. Mas uma das principais surpresas foi: o processo que iniciava quando um incidente acontecia.

Acionamento da Guardia (Plantão), abertura de warrooms com os responsáveis pelo sistemas afetados, escopos atingidos ou domínios afetados, postmortens, avaliação dos incidents, impacto nas metas da equipe e etc…

Sim, existe um processo de SRE bem estruturado e padronizado a ser seguido quando um incidente acontece. 

É sobre isso que falarei aqui.

Para unirmos a prática a um pouco de teoria vou embasar os fatos e padrões que identifiquei no Meli, com o livro *Microsserviços prontos para a produção* da Susan J. Fowler ([Susan Rigetti](https://www.susanrigetti.com/)). Inclusive, recomendo a leitura!

## Do capítulo: Tolerância a falhas e preparação para catástrofes

Neste capitulo do livro é possível encontrar um rico conteúdo sobre esse assunto, e também na internet se buscar esses termos. Meu foco aqui não vai ser chover no molhado e sim contar como *linkei* o conteúdo com a vivência do dia a dia.

A autora do livro cita uma lista de pontos que diz que um microsserviço está pronto para catástrofes quando:

- Ele não tem um ponto único de falha;
- Todos os cenários de falha e as possíveis catástrofes foram identificados;
- Ele é testado para resiliência por meio de testes de código, testes de carga e de caos;
- A detecção e a mitigação de falhas foram automatizadas;
- **Existem procedimentos padronizados de incidentes e interrupções dentro da equipe de desenvolvimento de microsserviços e em toda a organização;**

Esse último foi o que me saltou os olhos ao longo deste período e vou contar os motivos.

## Detecção e reparo a falhas

A primeira coisa que acontece quando você já está "maduro o suficiente" no Meli é ser adicionado na Guardia(plantão) da equipe.

A partir do momento que você entra na escala da Guardia, você instala o software no celular (Ops Genie) e caso aconteça algum problema você é acionado.

E tudo começa… 🔥

## Pam pam pam pam ⚠️

Quem já teve essa experiencia sabe como o coração fica na hora do acionamento - *desespelo*.

<p align="center">
  <img src="https://f.i.uol.com.br/fotografia/2022/01/07/164160615461d8ec0a914cc_1641606154_3x2_md.jpg" alt="Desespelo" width="320"/>
</p>

Meu primeiro acionamento foi tiro porrada e bomba, tinha umas cinco pessoas em uma WR (War Room), a aplicação na qual estava impactada era de outro time e o cliente não conseguia executar seus trabalhos. 

Me acionaram por engano e acabei ficando para ver se conseguiria ajudar na causa raiz, aqui eu já consigo ver um match com o conteúdo do livro:

### A Detecção do problema

Os acionamentos ainda estavam na fase de entender onde estava o problema. Essa é a primeira coisa, o foco na detecção do problema é tentar entender:

- Qual serviço está fora?
- Qual impacto está gerando na operação (para os clientes)?

**Exemplo:** Sistema de **entrada no pátio está respondendo status 500 (parou)**, isso **impede que os caminhões entrem no facility**. Isso é gravíssimo, vários indicadores podem ser impactados nesses casos. Fora que pode causar até riscos de acidentes. 

Okay, **sistema identificado** e **impacto** também (esse é um exemplo!!!).

A partir daqui vem os outros passos…

## Coordenação

Alinhamento é a melhor coisa nessas horas, ou seja, abrir uma WR (Warroom) caso não exista, chamar o ponto focal da equipe afetada (quem está na guardia/plantão), chamar as pessoas relacionadas aos sistemas afetados, conversar e coordenar o impacto que está gerando caso já saiba ou ao menos qual é o problema em si.

Não deixe as pessoas no escuro!

## Mitigação do problema

Aqui é onde a análise do impacto acontece e a missão é simplesmente fazer o sistema/feature operar novamente.

- Foi identificado um deploy no dia? Faz rollback!
- Identificou uma poison message? Faz reset e move back!
- Conexões do banco travadas? Mata as conexões!

Seu foco principal é voltar a operar na normalidade de antes do incidente. Únicos casos aqui que já vi ficar de mãos atadas é quando uma app que é dependência cai ou o provedor de cloud cai. (O que já vimos algumas vezes esse ano 😅).

## Análise aprofundada

Neste momento a equipe que passou pelo problema já estancou o sangramento e partirá para uma análise mais aprofundada do que aconteceu.

Aqui no Meli e em várias empresas, o momento que um alerta toca, é configurado um Hook (uma ação) que pode ser disparado para que uma mensagem chegue no teu slack, ou um e-mail, sms e etc.. Com o Hook tu pode configurar uma ação a ser executada. Aqui na minha equipe a ação é uma mensagem marota no grupo de alertas no slack. 

Essa mensagem contém, a métrica que foi afetada, a aplicação, o range de horários e o link para a ferramenta de monitoramento que tem o alerta configurado - grafana por exemplo.

Depois de passarmos pelo perrengue de na hora de escrever o postmortem sair catando prints, logs e tudo mais. Fazemos o seguinte, no momento do alerta, pegamos essa mensagem que foi gerada no Slack e começamos uma thread preenchendo com mensagens contendo a análise feita. O output disso é uma thread com toda a análise - timeline desde o início até a resolução e os anexos necessários como prints, logs e etc.

Assim, quando chegar a hora de montar o documento de **Post Mortem** não sofremos tanto.

## Postmortem

O PM como chamamos aqui, é um documento estruturado para analise do incidente que ocorreu.

Nele a equipe descreve:

- Causa raiz: O que rolou para que o alerta disparasse? Ex: Uma mensagen defeituosa na fila de processamento
- Detalhe do acontecido: O detalhamento do acontecido seguindo uma timeline (tipo a serie Shernobyl);
- Impacto: Qual foi o impacto gerado pelo incidente. Ex: Downtime da aplicação por 15min.
- Resolução: O que aconteceu para que o problema se resolvesse? Ex: Limpou a mensagem defeituosa da fila e reprocessou x tempo antes para evitar perder eventos…
- Postmortem Actions: Ações realizadas e a sem realizadas para que o problema seja mitigado/eliminado no futuro. Ex: Implementação de uma fila de DLQ, para analisar mensagens defeituosas caso a caso e liberar a fila principal.

Depois disso tudo preenchido, o fluxo segue para revisão do PM pela equipe e depois para a revisão dos TL's da iniciativa e managers.

## Conclusão

Ainda tem vários outros temas que o livro aborda como categorização dos incidentes, criticidade das aplicações e mais… eu acabei ocultando aqui pra não ficar muito extenso. 

Pra finalizar, concluo que sim, existe tolerância a falhas e um fluxo muito bem estruturado, para sempre focarmos na melhoria continua das nossas apps e dos nossos processos.

E isso faz toda a diferença 🤟🏼