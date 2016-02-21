---
layout: post
title: "Monthly expenses report"
description: "Monthly expenses report"
author: "Alex Johnstone"
author_email: "alexjj@gmail.com"
category: Site
tags: []
---

Similar to "Expenses, Income and Loans/Mortgage monthly totals", but now showing
all expense subaccounts.

~~~sql
SELECT
    year, month, account, sum(position)
FROM
    date > 2015-01-01 AND date < 2016-02-29
WHERE
    account ~ "Expenses"
    GROUP BY year, month, account
    ORDER by year, month, account
    FLATTEN
~~~
