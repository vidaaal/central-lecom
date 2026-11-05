const lecomKnowledge = [
  { key: "workspace", title: "Workspace — executar processos", articles: [
    { id: "workspace-rotina", title: "Priorizar e executar atividades", body: `<p><b>Workspace</b> é a área do usuário final para abrir processos disponíveis, executar tarefas recebidas e acompanhar instâncias.</p><ol><li>Consulte <b>Minhas atividades</b> para priorizar itens no prazo, em alerta ou atrasados.</li><li>Abra <b>Caixa de entrada</b> para localizar pendências e acessar o formulário.</li><li>Confira processo, etapa, prazo e dados antes de agir.</li><li>Preencha campos liberados e revise anexos/obrigatórios.</li><li>Use a ação disponível na etapa. A configuração do processo determina as ações.</li></ol><p><b>Abertos por mim</b> e <b>Geridos por mim</b> ajudam a acompanhar instâncias conforme o perfil. Mensagens não substitui a conclusão formal da atividade.</p>` },
    { id: "workspace-nao-encontro", title: "Não encontro uma atividade ou processo", body: `<p>Distinga falta de acesso ao módulo, processo indisponível para abertura e tarefa ausente da fila.</p><ul><li>Confirme usuário, Workspace e ambiente.</li><li>Pesquise a tarefa em Caixa de entrada/Minhas atividades.</li><li>Para iniciar, confirme se o processo foi liberado ao perfil/departamento.</li><li>Verifique se a tarefa continua atribuída a você e não foi concluída ou encaminhada.</li><li>Se persistir, solicite ao responsável funcional que confira perfil, licença e configuração.</li></ul><p>No chamado inclua processo, atividade, horário, perfil, ambiente e resultado observado; remova dados sensíveis das capturas.</p>` }
  ]},
  { key: "studio", title: "Studio — processos e BPMN", articles: [
    { id: "studio-as-is-to-be", title: "Do AS IS à configuração no Studio", body: `<p><b>Studio</b> é voltado à construção e configuração de processos. Comece pela operação real antes de alterar o desenho.</p><ol><li>Defina objetivo, dono, gatilho, resultado e limites.</li><li>Mapeie o <b>AS IS</b>: tarefas, responsáveis, sistemas, documentos, esperas, retrabalho e exceções.</li><li>Valide com quem executa; não confunda prática atual com procedimento desejado.</li><li>Desenhe o <b>TO BE</b> e avalie simplificações e controles.</li><li>Traduza em etapas, responsáveis, ações, campos, grids, regras e integrações.</li><li>Teste e obtenha aceite do dono antes de publicar.</li></ol><p>Mapa textual/Mermaid comunica o fluxo, mas não é BPMN executável no LECOM.</p>` },
    { id: "studio-bpmn", title: "Checklist BPMN: caminhos completos", body: `<ul><li>Use piscinas para participantes independentes e raias para papéis internos.</li><li>Nomeie tarefas com verbo + objeto: <b>Validar solicitação</b>.</li><li>Gateway como pergunta, saídas rotuladas: <b>Completo?</b> → Sim/Não.</li><li>Exclusivo: apenas uma rota; paralelo: todas; inclusivo: uma ou mais.</li><li>Modele devolução, rejeição, cancelamento, erro e timeout quando existirem.</li><li>Todo caminho iniciado deve chegar ao fim ou ter tratamento explícito.</li></ul><p>Valide caso normal, incompleto, reprovado, correção e cancelamento. Confirme responsáveis, critérios e prazos; não invente alçadas nem SLAs.</p>` }
  ]},
  { key: "formularios", title: "Formulários e regras de negócio", articles: [
    { id: "formularios-campos-grids", title: "Campos, grids e validações por etapa", body: `<p>Peça apenas os dados necessários à decisão da etapa. Para cada campo registre finalidade/origem, tipo, quem vê/edita, obrigatoriedade por etapa e mensagem de validação.</p><p>Para grids, documente o que cada linha representa, colunas, regras de incluir/editar/excluir e totais/limites. Teste sem linhas, com uma e com várias. Para anexos, indique finalidade e etapa.</p><p><b>IDs, ações e grupos devem ser confirmados no formulário real</b>; não deduza o ID pelo rótulo.</p>` },
    { id: "formularios-javascript", title: "API JavaScript de formulário: diagnóstico", body: `<p>A referência disponível é LECOM BPM 5.50, manual v1.04. Manipula formulário no navegador; não é API REST nem publica diagramas. Confirme compatibilidade da versão.</p><pre><code>Form.fields().map(function (f) { return f.id; });
Form.actions().map(function (a) { return a.id; });</code></pre><pre><code>(function () {
    var campo = Form.fields('ID_CAMPO');
    campo.visible(true).readOnly(false);
    Form.apply();
})();</code></pre><p>Substitua IDs por valores confirmados no Studio. A referência descreve <code>SUBMIT</code> e <code>reject()</code> para validação que bloqueia envio. Teste em homologação; não presuma que ações como <code>aprovar</code> existam.</p>` }
  ]},
  { key: "publicacao", title: "Acesso e ciclo de mudança", articles: [
    { id: "publicacao-checklist", title: "Checklist de alteração e publicação", body: `<ol><li>Registre motivo, processo, solicitante e dono.</li><li>Documente estado atual, proposta e impactos em áreas, dados, integrações e instâncias ativas.</li><li>Revise diagrama, responsáveis, ações, formulário, permissões e prazos aprovados.</li><li>Teste caminhos normais e exceções em aceite/homologação.</li><li>Guarde evidências, aceite, versão e plano de retorno.</li><li>Publique conforme procedimento autorizado; confirme com usuários-chave e atualize a documentação.</li></ol><p><b>Telas e campos de publicação variam por versão/configuração.</b> Confira no ambiente; isto não é autorização para alterar produção.</p>` },
    { id: "publicacao-permissoes", title: "Acesso e permissões: triagem segura", body: `<p>Algo ausente pode decorrer de permissão, licença, configuração, etapa ou versão. Confirme usuário, módulo e ambiente; registre qual processo/ação/tela não aparece e em qual etapa. Peça ao administrador/responsável funcional para validar o perfil. Nunca compartilhe credenciais nem peça privilégio administrativo para contornar dúvida de usuário.</p>` }
  ]},
  { key: "analises", title: "Análises, auditoria e diagnóstico", articles: [
    { id: "analises-atraso", title: "Investigar atraso sem presumir a causa", body: `<ol><li>Localize a instância e confirme processo, etapa e ambiente.</li><li>Verifique prazo e responsável no Workspace.</li><li>Consulte painel/relatório disponível em Análises, se autorizado, para entender fila e volume.</li><li>Use auditoria ou pesquisa de logs com autorização; correlacione horário, instância e evento.</li><li>Separe fatos de hipóteses e encaminhe evidências mínimas ao dono ou suporte.</li></ol><p>Tempo de ciclo, volume e atraso ajudam a localizar gargalos, mas não provam causa raiz.</p>` },
    { id: "analises-recursos", title: "Qual recurso de Análises usar", body: `<ul><li><b>Estatística:</b> consulte números e comportamento agregado.</li><li><b>Painel de atrasos:</b> identifique atividades/instâncias atrasadas.</li><li><b>Auditoria BPM:</b> investigue registros de auditoria do processo.</li><li><b>Inventário BPM:</b> consulte informações de inventário.</li><li><b>Pesquisa de logs:</b> busque evidência técnica quando autorizado.</li></ul><p>São nomes da referência operacional 5.70; disponibilidade, filtros e dados dependem de licença e perfil. Registre período e filtros.</p>` }
  ]},
  { key: "documentos", title: "Documentos e ECM", articles: [
    { id: "documentos-ecm-anexo", title: "Documento no ECM ou anexo da atividade?", body: `<p><b>Documentos/ECM</b> é a área de gestão documental descrita na referência. Um <b>anexo da atividade</b> pertence a solicitação/etapa. Armazenamento e vínculo dependem da configuração.</p><ul><li>Confirme se é evidência do caso ou documento corporativo reutilizável.</li><li>Verifique repositório oficial e campos de documento configurados no fluxo.</li><li>Confira acesso, versão, classificação, retenção e política de dados interna.</li><li>Evite duplicar cópias controladas; aponte para a fonte oficial.</li></ul><p>Não inclua senhas, credenciais ou dados pessoais na base.</p>` },
    { id: "documentos-assinatura", title: "Assinatura digital e evidências", body: `<p>A referência operacional descreve assinatura vinculada ao fluxo ou módulo Documentos em configurações compatíveis. O caminho depende dos recursos habilitados e do desenho do processo.</p><p>Documente arquivo a assinar, etapa, signatários/ordem, tratamento de recusa ou falha e local autorizado para consultar status/evidência.</p><p><b>Não prometa validade, método ou certificado</b> sem confirmar serviço contratado, configuração e regra corporativa.</p>` }
  ]},
  { key: "automacao", title: "Roberty, serviços e integrações", articles: [
    { id: "automacao-roberty", title: "Quando avaliar Roberty/RPA", body: `<p>Roberty/RPA automatiza tarefas repetitivas. Avalie quando há rotina recorrente, regras estáveis e sistemas identificados — não como primeira resposta a processo mal definido.</p><ul><li>Mapeie processo e exceções.</li><li>Registre sistemas, frequência, volume e dono operacional.</li><li>Defina sucesso, falha, reprocessamento e intervenção humana.</li><li>Teste em aceite, monitore logs e combine contingência antes da produção.</li></ul><p>Confirme módulo e permissões no ambiente. Nunca armazene credenciais aqui.</p>` },
    { id: "automacao-integracoes", title: "Documentar serviços e integrações", body: `<p>Identifique donos funcional/técnico, processo consumidor, finalidade, ambiente, dados e tratamento de falhas.</p><p>Registre sistemas origem/destino, evento disparador, dados/classificação, timeout, indisponibilidade, retentativa, ambientes, teste, versão, monitoramento e suporte.</p><p>A referência orienta versionar integração em aceite e depois exportar/importar em produção conforme procedimento. Confirme mecanismo local; não publique endpoints privados, tokens ou segredos.</p>` }
  ]},
  { key: "suporte", title: "Suporte e governança da central", articles: [
    { id: "suporte-chamado", title: "Abrir chamado com evidência útil", body: `<p>Descreva fatos observados e identifique hipóteses como hipóteses. Inclua ambiente/versão, módulo, processo, atividade, instância se permitido, perfil, horário/fuso, passos, resultado esperado/observado, erro literal, impacto e testes feitos. Use capturas sanitizadas e canal oficial da empresa.</p><p>Contatos e URLs internas ainda devem ser cadastrados pelo dono desta central.</p>` },
    { id: "suporte-governanca", title: "Manter a base confiável e atualizada", body: `<p>Os guias operacionais usam material LECOM 5.70; o exemplo de JavaScript usa manual 5.50. Isso <b>não confirma a versão instalada na empresa</b>.</p><p>Para conteúdo validado, registre status, versão, ambiente, perfil testado, responsável funcional, data e link da fonte oficial/ticket. Se a tela divergir, confira versão, permissão, licença e configuração. O dono atualiza ou marca a página desatualizada.</p><p>Guarde arquivos oficiais no SharePoint e mantenha aqui orientações e links — sem credenciais nem dados sensíveis.</p>` }
  ]}
];

for (const group of document.querySelectorAll("main [data-group]")) group.remove();
const navigation = [...document.querySelectorAll(".nav-item[data-cat]")];
const chips = [...document.querySelectorAll(".chip[data-filter]")].filter((item) => item.dataset.filter !== "all");
let insertionPoint = document.querySelector("#empty");
lecomKnowledge.forEach((category, categoryIndex) => {
  const number = String(categoryIndex + 1).padStart(2, "0");
  const nav = navigation[categoryIndex];
  const chip = chips[categoryIndex];
  nav.dataset.cat = category.key;
  nav.href = `#cat-${category.key}`;
  nav.innerHTML = `<span class="nav-num">${number}</span>${category.title}`;
  chip.dataset.filter = category.key;
  chip.textContent = category.title;
  const section = document.createElement("section");
  section.className = "group";
  section.id = `cat-${category.key}`;
  section.dataset.group = category.key;
  section.innerHTML = `<h2 class="group-title"><span>${number}</span> ${category.title}</h2>`;
  category.articles.forEach((article, articleIndex) => {
    const card = document.createElement("details");
    card.className = "card";
    card.id = article.id;
    card.dataset.article = "";
    card.dataset.category = category.key;
    card.innerHTML = `<summary><span class="card-idx">${number}.${String(articleIndex + 1).padStart(2, "0")}</span><span class="card-title">${article.title}</span><span class="card-chevron">+</span></summary><div class="card-tools"><button type="button" class="tool-btn" data-favorite>☆ Salvar</button><button type="button" class="tool-btn" data-copy>↗ Copiar link</button></div><div class="card-body">${article.body}<p class="article-meta"><b>Validação local:</b> confirme versão, ambiente, perfil e responsável antes de tratar como procedimento oficial da empresa.</p></div>`;
    section.append(card);
  });
  insertionPoint.after(section);
  insertionPoint = section;
});
