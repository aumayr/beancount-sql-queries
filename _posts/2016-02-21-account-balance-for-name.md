---
layout: post
title: "Balances of accounts which contain \"Phone\" in their name"
description: "Balances of accounts which contain \"Phone\" in their name"
#author: "Dominik Aumayr"
#author_email: "dominik@aumayr.name"
category: Site
tags: []
---

This query shows the balances of accounts which contain "`Phone`" in their
name, on each day a transaction was made on that account.

~~~sql
SELECT
  date, account, position, balance 
WHERE 
  account ~ 'Phone';
~~~
