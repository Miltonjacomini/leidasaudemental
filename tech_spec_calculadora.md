# Como Calcular o Custo da Saúde Mental na Empresa segundo a Lei 14.831/2024

## Entendendo a Lei 14.831/2024

A Lei 14.831/2024 institui o **Certificado Empresa Promotora da Saúde Mental**, um selo voluntário concedido pelo governo federal às empresas que implementam práticas efetivas de promoção da saúde mental dos colaboradores. A lei estabelece **17 requisitos divididos em 3 eixos** mas **não define valores obrigatórios de investimento**, permitindo flexibilidade conforme o porte e necessidade de cada organização.

### Requisitos da Lei (Art. 3º)

**Eixo I: Promoção da Saúde Mental**
- Programas de promoção da saúde mental
- Acesso a apoio psicológico/psiquiátrico
- Campanhas e treinamentos de conscientização
- Capacitação de lideranças
- Combate ao assédio e discriminação
- Avaliação regular das ações

**Eixo II: Bem-estar dos Trabalhadores**
- Ambiente de trabalho seguro
- Equilíbrio vida pessoal/profissional
- Incentivo a atividades físicas, lazer e alimentação saudável
- Comunicação integrativa

**Eixo III: Transparência e Prestação de Contas**
- Divulgação regular das ações
- Canal de sugestões e avaliações

## Framework de Cálculo de Custos

Para calcular os custos de implementação, utilize esta fórmula estruturada:

### Fórmula Principal
```
Custo Total de Implementação = Custo Direto + Custo Indireto + Custo de Oportunidade + Custo de Não Conformidade
```

### Componentes do Cálculo

1. **Custo Direto (60-70% do total)**
   - Programa de Apoio ao Empregado (PAE): R$ 15-40/funcionário/mês
   - Consultas psicológicas: R$ 150-300/hora
   - Treinamentos: R$ 5.000-30.000 por capacitação
   - Campanhas internas: R$ 2.000-10.000/anual
   - Ferramentas tecnológicas: R$ 10.000-50.000/anual

2. **Custo Indireto (20-30% do total)**
   - Horas de trabalho dedicadas à gestão do programa
   - Tempo de lideranças em treinamentos
   - Adaptação de processos internos

3. **Custo de Oportunidade (5-10% do total)**
   - Recursos alocados que poderiam ser usados em outras áreas

4. **Custo de Não Conformidade**
   - Multas administrativas: até R$ 3.000 por empregado (NR-1)
   - Indenizações trabalhistas: R$ 10.000-100.000 por processo
   - Absenteísmo: 36% da folha de pagamento

---

# Tech Spec: Calculadora Online de Custo de Saúde Mental Empresarial

## 1. Visão Geral do Produto

**Objetivo**: Desenvolver uma calculadora web que auxilie empresas a dimensionarem investimentos em saúde mental, calcular ROI, avaliar conformidade com a Lei 14.831/2024 e estimar riscos financeiros de não implementação.

**Público-Alvo**: RH, gestores, CFOs e departamentos jurídicos de empresas brasileiras (MEIs a grandes corporações).

## 2. Arquitetura Técnica

### 2.1 Stack Tecnológica
```javascript
Frontend: React 18+ / Next.js 14+ (TypeScript)
Backend: Node.js / NestJS (TypeScript)
Banco de Dados: PostgreSQL 15+ (dados estruturados) + Redis (cache)
Hospedagem: AWS / Azure (escalabilidade e conformidade LGPD)
Analytics: Metabase ou PowerBI Embedded
```

### 2.2 Componentes Principais

#### Frontend (Calculadora Pública)
- **Interface Responsiva**: Design mobile-first com WCAG 2.1 AA
- **Micro-frontends**: Módulos independentes para cada tipo de cálculo
- **Armazenamento Local**: LocalStorage para manter dados do usuário temporariamente
- **Exportação**: PDF e Excel dos resultados

#### Backend (API RESTful)
- **Endpoints Principais**:
  ```
  POST /api/v1/calculator/baseline
  POST /api/v1/calculator/roi
  GET /api/v1/compliance/checklist
  POST /api/v1/risk-assessment
  GET /api/v1/benchmark/:industry/:size
  ```

#### Banco de Dados
- **Schemas**:
  - `companies` (anonimizado)
  - `calculation_history`
  - `compliance_checklist`
  - `industry_benchmarks`
  - `cost_components`

## 3. Requisitos Funcionais

### 3.1 Módulo de Diagnóstico Inicial
- **Inputs**:
  - Porte da empresa (micro, pequena, média, grande)
  - Setor de atuação (dropdown com CNAES)
  - Número de funcionários
  - Localização geográfica
  - Estrutura atual (existe PAE, treinamentos, etc.)

- **Outputs**: 
  - Relatório de maturidade em saúde mental (nível 1-5)
  - Gap analysis vs. requisitos da Lei 14.831/2024

### 3.2 Módulo de Cálculo de Custos
```typescript
interface CostCalculation {
  directCosts: {
    psychologicalSupport: number;
    training: number;
    campaigns: number;
    technology: number;
    eapProgram: number;
  };
  indirectCosts: {
    managementHours: number;
    leadershipTrainingHours: number;
  };
  opportunityCost: number;
  nonComplianceRisk: {
    fines: number;
    legalCosts: number;
    absenteeismCost: number;
    turnoverCost: number;
  };
}
```

**Algoritmo de Cálculo**:
1. **Base por Funcionário**: Multiplicador baseado no porte
   - Micro (1-9): R$ 150-300/funcionário/ano
   - Pequena (10-49): R$ 200-400/funcionário/ano
   - Média (50-249): R$ 300-600/funcionário/ano
   - Grande (250+): R$ 400-800/funcionário/ano

2. **Fator Setorial**: Multiplicador por risco psicossocial
   - Alto risco (call center, saúde, segurança): 1.5x
   - Médio risco (indústria, varejo): 1.2x
   - Baixo risco (tecnologia, educação): 1.0x

3. **Custo Regional**: Ajuste por custo de vida (IBGE)
   - São Paulo/Rio: 1.3x
   - Capitais: 1.1x
   - Interior: 1.0x

### 3.3 Módulo de ROI e Benefícios
**Fórmula ROI Adaptada para Brasil**:
```
ROI = ((Economia Total - Investimento Total) / Investimento Total) × 100

Economia Total = 
  Redução Absenteísmo (30-40%) +
  Redução Turnover (15-25%) +
  Redução Custos Médicos (20-30%) +
  Ganho Produtividade (10-15%)
```

**Métricas de ROI**:
- **Payback Period**: Tempo para retorno do investimento (tipicamente 12-24 meses)
- **NPV**: Valor presente líquido em 3 anos
- **Índice de Produtividade**: Dados de presenteísmo via surveys integrados

### 3.4 Módulo de Compliance e Risco
- **Checklist Interativo**: 17 requisitos da Lei 14.831/2024 com pontuação
- **Nível de Conformidade**: 
  - 0-40%: Crítico (alto risco jurídico)
  - 41-70%: Atenção (necessita melhorias)
  - 71-90%: Adequado (pronto para certificação)
  - 91-100%: Excelente (referência)

- **Simulador de Riscos**: 
  - Probabilidade de ação trabalhista baseada em dados regionais
  - Estimativa de indenizações (R$ 10.000-100.000 por caso)
  - Multas administrativas (até R$ 3.000/empregado)

### 3.5 Benchmarking e Analytics
- **Base de Dados Anonimizada**: Comparativo com empresas similares
- **Indicadores de Mercado**: 
  - Média de investimento por setor
  - Taxa de adoção de cada prática
  - ROI médio observado

## 4. Requisitos Não Funcionais

### 4.1 Performance
- **Tempo de Resposta**: < 2 segundos para cálculos complexos
- **Disponibilidade**: 99.9% (SLA)
- **Scalability**: Suporte para 10.000+ usuários simultâneos
- **Cache**: Redis para resultados de cálculos repetidos

### 4.2 Segurança e Privacidade (LGPD)
- **Anonimização**: Dados da empresa anonimizados para benchmarking
- **Criptografia**: TLS 1.3, AES-256 para dados sensíveis
- **Consentimento**: Opt-in explícito para armazenamento de dados
- **Retenção**: Exclusão automática após 30 dias (dados temporários)
- **Auditoria**: Logs de acesso com trail completo

### 4.3 Acessibilidade e UX
- **WCAG 2.1 AA**: Compatível com leitores de tela
- **Multi-idioma**: Português (BR) e Inglês
- **Mobile-First**: Progressive Web App (PWA)
- **Onboarding**: Tour interativo de 3 minutos

### 4.4 Integrações
- **SSO**: SAML 2.0 / OAuth 2.0 (Google, Microsoft)
- **ERP/HRIS**: APIs para SAP SuccessFactors, Workday, Darwin
- **Benefícios**: Integração com operadoras de saúde (ex: Amil, SulAmérica)
- **Gestão**: Webhooks para Slack, Teams, email

## 5. Banco de Dados e Inteligência

### 5.1 Estrutura de Dados
```sql
-- Tabela de Componentes de Custo
CREATE TABLE cost_components (
    id UUID PRIMARY KEY,
    company_size VARCHAR(20),
    industry_sector VARCHAR(50),
    component_type VARCHAR(50), -- 'direct', 'indirect', 'compliance'
    description TEXT,
    min_value DECIMAL(10,2),
    max_value DECIMAL(10,2),
    average_value DECIMAL(10,2),
    region_factor DECIMAL(3,2)
);

-- Tabela de Benchmarks
CREATE TABLE industry_benchmarks (
    id UUID PRIMARY KEY,
    industry VARCHAR(50),
    company_size VARCHAR(20),
    avg_investment_per_employee DECIMAL(10,2),
    avg_roi DECIMAL(5,2),
    compliance_rate DECIMAL(5,2)
);
```

### 5.2 Machine Learning (Opcional)
- **Modelo de Predição**: 
  - Prever absenteísmo baseado em indicadores de saúde mental
  - Sugerir investimentos otimizados por perfil da empresa
  - Alertas proativos de risco psicossocial

## 6. API e Documentação

### 6.1 Endpoints Principais
```javascript
// Cálculo baseline
POST /api/v1/calculator/baseline
Request: {
  companySize: "medium",
  employees: 150,
  industry: "technology",
  currentPrograms: ["eap", "training"]
}
Response: {
  estimatedCost: {
    min: 45000,
    max: 90000,
    recommended: 67500
  },
  complianceScore: 45,
  priorityAreas: ["leadership_training", "campaigns"]
}

// Cálculo ROI
POST /api/v1/calculator/roi
Request: {
  investmentAmount: 67500,
  projectionYears: 3
}
Response: {
  roi: 180,
  paybackMonths: 14,
  totalSavings: 189000,
  breakdown: {
    absenteeism: 75000,
    turnover: 45000,
    medicalCosts: 45000,
    productivity: 24000
  }
}
```

### 6.2 Documentação
- **OpenAPI 3.0**: Especificação completa da API
- **SDK**: Bibliotecas para Python e Node.js
- **Webhook Events**: Notificações de cálculo completo, alertas de risco

## 7. Roadmap de Implementação

### Fase 1 (MVP - 8 semanas)
- Interfaces de cálculo básico (custos e ROI)
- Checklist de compliance Lei 14.831/2024
- Exportação PDF simples

### Fase 2 (12 semanas)
- Benchmarking com base de dados setoriais
- Dashboards interativos
- Integrações com HRIS principais
- Simulador de riscos jurídicos

### Fase 3 (16 semanas)
- Machine Learning para predições
- Analytics avançado
- Funcionalidade colaborativa (múltiplos usuários)
- Certificação e selo de conformidade

## 8. Métricas de Sucesso

- **Adoção**: 1.000+ empresas no primeiro ano
- **Precisão**: Variação < 15% entre custo estimado e real (validação com usuários)
- **Retention**: 60% dos usuários retornam para re-cálculo após 6 meses
- **Conversão**: 15% dos usuários free convertem para versão premium

## 9. Modelo de Monetização

- **Freemium**: Diagnóstico básico gratuito
- **Premium**: R$ 299/mês (dashboard completo, benchmarking, alertas)
- **Enterprise**: R$ 999/mês (integrações, API, suporte dedicado)

---

Esta tech spec fornece uma base completa para desenvolver uma calculadora que não apenas ajuda empresas a dimensionarem investimentos, mas também demonstra valor de negócio e mitiga riscos conforme a legislação brasileira.