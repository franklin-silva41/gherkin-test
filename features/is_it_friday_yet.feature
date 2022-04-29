Feature: É sexta feira
Todo mundo quer saber quando é sexta-feira

  Scenario: Domingo não é sexta
    Given Hoje é Domingo
    When Eu pergunto se é sexta-feira ainda
    Then dito "nop"