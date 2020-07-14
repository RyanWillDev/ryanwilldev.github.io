---
title: 'Taking Flight With Phoenix'
description: 'Getting started with Phoenix'
tags: elixir phoenix
series: 
  title: taking flight with phoenix
  subtitle: 'Part 1: Preflight Check'
keywords: tutorial
---

## Preparing for departure

Before taking off, we need to make sure we have met all the requirements. 
For our trip we'll need to make sure we have Elixir version 1.5 or greater, 
Phoenix version 1.4.8, and PostgreSQL installed.
We'll walk through how to install each on macOS, but I'll include links for
installation instructions for other operating systems.

## Installing Dependencies

We'll start by installing Elixir.
You can find installation instructions for all platforms [here](https://elixir-lang.org/install.html).
The easiest way to install Elixir for macOS is to use a package manager such as
Homebrew or Macports. For this tutorial we'll be using Homebrew. 
Follow the [installation instructions](https://brew.sh/) for Homebrew if you don't already have it installed.

Once you have installed Homebrew enter the following commands in your terminal. 

```shell
brew update # Updates Homebrews package listing
brew install elixir # Installs the latest version of Elixir
elixir -v # Make sure Elixir is installed
```

Next we'll need to install the web framework, Phoenix.
[Here](https://hexdocs.pm/phoenix/installation.html#content) are the
instructions for installing Phoenix.

Before we can install Phoenix we will need to make sure our version of the
Elixir package manager, Hex, is up to date with the following command.

```shell
mix local.hex
```

We're now ready to install Phoenix with the command
```shell
mix archive.install hex phx_new 1.4.8
```

```elixir
SomeModule.function_call(1)
```

Finally, we need to make sure we have PostgreSQL installed. 
The easiest way to install PostgreSQL for macOS is to use the [Postgres.app](https://postgresapp.com/downloads.html).
To install PostgreSQL on another platform follow the instructions [here](https://www.postgresql.org/download/).
