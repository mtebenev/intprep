# https://leetcode.com/problems/subdomain-visit-count/
# Tags: easy, string

from typing import List
import unittest

class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        counts = dict()
        for cp_domain in cpdomains:
            count, domain = cp_domain.split(' ')
            parts = domain.split('.')
            for i in range(len(parts)):
                merged = '.'.join(parts[i:])
                if not merged in counts:
                    counts[merged] = 0
                counts[merged] += int(count)

        result = ['{} {}'.format(count, domain) for domain, count in counts.items()]
        return result


def test_1():
    assert Solution().subdomainVisits(['9001 discuss.leetcode.com']) == ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com']

def test_2():
    case = unittest.TestCase()
    case.assertCountEqual(Solution().subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]),
        ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"])


