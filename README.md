# Keycloak setup for IAM @ StackRoute

Keycloak can be used (as it is Open Source) for setting up Identity and Access Management service, which is central and common across all StackRoute eco system for EduTech products

This repository is meant to maintain the details of settingup of Keycloak and its adaption efforts among StackRoute products

### Getting started
To get started, you may wish to run Keycloak locally and quickly create your local IAM service with which we can try integration related coding effort locally

Simplest way is to run the keycloak as a container, below should help you do the same

`docker run -p 8080:8080 --name keycloak -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin123 -d jboss/keycloak`

**Using Docker Compose**
You can also use docker-compose alternatively, by running from `docker-compose-kc-local.yaml` 

You can also find more examples of keycloak containers from belwo location, but recommend to start with simplest way, if you wish to be productive

- [Keycloak container examples](https://github.com/keycloak/keycloak-containers/tree/master/docker-compose-examples)

### Quick introduction to concepts of Keycloak

- **users**
Users are people who can log into an application, their details are maintained and mapped with groups, roles and access

- **authentication**
The process of identifying and validating a user.

- **authorization**
The process of granting access to a user.

- **roles**
Roles identify a type or category of user assigned with specific responsibilities at the organisation, these responsibilities require access permission to resources, each user is assigned (mapped) with one or more Role, in StackRoute ecosystem, their is always at least one role assigned

- **groups**
Groups manage groups of users. Easier to manage responsibilties. Attributes can be defined for a group. You can map roles to a group as well, users of the group inherit the attributes and role mappings that group

- **realms**
Realm is the logical context and isolated from one another, it can be mapped to a tenant of the organisation. 

A realm manages a set of users, roles, groups. 

A user belongs to and logs into a realm. 

more concepts of the Keycloak can be [referred here](https://www.keycloak.org/docs/latest/server_admin/index.html#core-concepts-and-terms)


## Why chose [Keycloak](https://www.keycloak.org/about.html)
- It is more modern than available similar solutions
- It is open source, supported by Redhat under JBoss initiatives
- It has good documentation
- It can support multiple style of Authentication, supports OpenID Connect (OIDC), like OAth 2.0 for social logisn, SAML for legacy enterprise applications


