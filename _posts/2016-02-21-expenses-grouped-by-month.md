---
layout: post
title: "USD-Expenses in 2015, grouped by month"
description: "USD-Expenses in 2015, grouped by month"
#author: "Dominik Aumayr"
#author_email: "dominik@aumayr.name"
category: Site
tags: []
---

~~~sql
SELECT
  MONTH(date) AS month,
  SUM(COST(position)) AS balance
WHERE
   account ~ 'Expenses:' AND
   currency = 'USD' AND
   YEAR(date) = 2015
GROUP BY 1
ORDER BY 1;
~~~
