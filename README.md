# WARMY-API

Essa é um API de tarefas para o desafio de back-end od project 

# Documentação 

## Listagem de tarefas

METHOD: GET

Endpoint: /tasks


## Busca uma tarefa especifica

METHOD: GET

Endpoint: /tasks/:taskId

## Exclusão de task
METHOD: DELETE

Endpoint: /tasks/:taskId

## Cadastro de um tarefa
METHOD: POST

Endpot /tasks

Request
```
{
	"name": "terminar atividade",
	"description": "descrição da atividade"
}
```

## Atualização de um tarefa
METHOD: PUT

Endpot /tasks/taskId

Request
```
{
	"name": "terminar atividade",
	"description": "descrição da atividade",
    "done": true
}
```
