# Questões

Responda sucintamente os itens a seguir em um .txt levando as perguntas e as respostas para o controle de versão da maneira que julgar mais apropriado:

## 1. A solução deve ser disponibilizada em Cloud ou On-premise?

Deve ser disponibilizada em Cloud.

Isso reduziria custos de manutenção dos servidores, e aceleraria o desenvolvimento e entrega da solução. A solução em Cloud também possibilita escalar, ou reduzir, a capacidade dos servers conforme a demanda dos usuários (ex: aumentar a capacidade em períodos comemorativos, ou na Black Friday).

A estrutura on-premise não seria interessante - neste caso - porque demanda toda uma infraestrutura interna de servidores e equipamentos dentro da empresa. Praticamente, construir um data center. Além disso, haveria a necessidade de se ter uma equipe completa para manter essa infra, junto com as preocupações com segurança física e de dados, backups e atualizações. 

## 2. Considerando a participação de 4 pessoas técnicas para o desenvolvimento dessa solução, responda qual ferramenta acreditas ser apropriada para o controle de tarefas da equipe, a ferramenta é ágil?

O Github possui uma ferramenta de tracking de projetos dentro de cada repositório que pode ser usada. É ágil. E possibilita criar quadros Kanban ou de Scrum que o time poderia usar para controlar as tarefas (backlog) - juntamente com as issues (bug tracking).

Outra opção seria o Trello, que também é agile. Além desses, Asana e Jira podem ser avaliados pelo time.

## 3. Você se sente capaz de liderar esta equipe? Por quê?

Acredito que sim.

Este projeto é bem parecido com um no qual participei anteriormente. Naquele, nossa equipe auxiliava o time de "Customer Success" no gerenciamento das contas dos usuários de vários sistemas de uma suíte de produtos. 

Fazíamos, também, o desenvolvimento de algumas das ferramentas que eles usavam, como o sistema de on-boarding de novos clientes e a API de logs, por exemplo. Nosso time usava agile, com sprints de 15 dias e backlog para os projetos. Todas as soluções eram em cloud (AWS) e em containers. 

Então seria um processo similar, porém, em maior escala.

## 4. Se pudesse sugerir uma melhoria, mudança ou oportunidade. O que seria?

Esta proposta de solução precisa ainda definir a autenticação de usuários, as definições de UI para o painel de interações, a utilização de um Load Balancer para melhor distribuir a carga das interações dos usuários, e a utilização de uma cloud privada para proteger o sistema.

A utilização de containers (Docker) para o desenvolvimento e deployment deste projeto seria o ideal.

O mecanismo de mensagens (Message Broker) precisa de uma melhor avaliação de capacidade necessária, ou seja, quais/quantas máquinas ele irá usar na cloud.

Uma possível oportunidade seria usar esses dados das interações em um sistema de recomendações de produtos e ofertas, baseado no que o usuário estaria precisando conforme suas interações/dúvidas/reclamações.

## 5. Acha válido esse desafio para o processo que está participando?

Este desafio foi bastante válido por abranger a parte de Systems Design, Arquitetura, Infra, e Código. Basicamente, exigiu uma visão geral de todo um sistema complexo e de conceitos mais modernos (como o Omnichannel), mas sem exigir absurdos (como a implementação de tudo, o que não seria viável).

A utilização do C4 Model foi bem interessante, também. Como já utilizava UML, foi apenas uma questão de migração de conceitos. Mas, houve pequena dificuldade no aprendizado da ferramenta de modelagem (Structurizr).

A definição do problema poderia ser revisada e mais detalhada, pois causa algumas dúvidas.
