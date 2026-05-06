/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */


func reverseList(head *ListNode) *ListNode {
    curr := head
	var prev *ListNode
	for curr!= nil{
		nexttmp:=curr.Next
		curr.Next = prev
		prev=curr
		curr=nexttmp
	}
    return prev
}
