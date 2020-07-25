# Omni Customer Interaction Management

This project was built as part of an interview challenge, to develop a Customer Interaction Management system design and a small feature for creating user accounts.

The following are the deliverables of this challenge:
* [**diagrams folder**](/diagrams) - C4 Model diagrams of a proposed solution
* [**omni-cim-panel folder**](/omni-cim-panel) - the code for a client-side admin panel
* [**omni-cim-server folder**](/omni-cim-server) - the code for an API server for the admin panel
* [**questions folder**](/questions) - answers for questions made on this challenge (PT-BR).

----
## Requirements

Please, make sure you have the following installed

* Docker
* Docker Compose

You can use this command to check:

```
$ docker -v && docker-compose -v
```

----
## How-To

```
$ git clone git@github.com:ruancarvalho/omni-cim.git
```

```
$ cd omni-cim/
```

```
$ docker-compose build
```

```
$ docker-compose up
```

----
## Services

[localhost:3000](http://localhost:3000) - the **omni-cim-panel** which is the **front-end app**

[localhost:5000](http://localhost:5000) - the **omni-cim-server** backend api

[localhost:8080](http://localhost:8080) - the "adminer" which is a very simple database client, so you can see the tables.

----
## Problem and Proposed Solution

Currently, we provide several digital channels for interaction with people that make up our customers profile. We identified the need to unify the user experience of in all channels, in a more objective, precise enable the following actions:

* Start interaction on any channel;
* Continue the interaction from any channel, that is, an interaction started in
channel A must be continued fluidly in channel B;
* Receive message on the channel opened by the user, even if no interaction
has been performed by him on this channel.

To make this concept of Omnichannel possible, a scalable infrastructure is required to serve all people who consume our services daily.

This is a Context Diagram of the proposed solution, using C4 Model notation:

![Image of System Context](/diagrams/system-context-diagram.png?raw=true)

Please, reach to the _diagrams_ folder to see the Container and Deployment models.
