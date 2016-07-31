---
layout: post
title: "List of Expenses for this Month"
description: "Lists all Expenses for this Month."
author: "har96"
author_email: ""
category: Site
tags: []
---

To display a list of Expenses for the current month, you can use the following query:

~~~sql
SELECT 
    account, sum(cost(position)) as total, month 
WHERE
    account ~ "Expenses:*" and year = YEAR(today()) and month = MONTH(today()) 
GROUP BY month, account 
ORDER BY total, account DESC
~~~
