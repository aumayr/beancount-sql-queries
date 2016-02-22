---
layout: post
title: "Holdings Report"
description: "Holdings Report"
author: "Alex Johnstone"
author_email: "alexjj@gmail.com"
category: Site
tags: []
---

Tries to replicate bean-report holdings. Shows units, book value (what you paid) and market value (what they're worth now).

~~~sql
SELECT 
	account, units(sum(position)) AS quantity, cost(sum(position)) AS Book , convert(units(sum(position)), "USD") AS Market
WHERE
	account ~ "Assets:Trading" 
GROUP BY account 
ORDER BY account

~~~
