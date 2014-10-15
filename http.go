package libkb

import (
	"fmt"
	"net/url"
)

type HttpValue interface {
	ToString() string
}

type HttpArgs map[string]HttpValue

type S struct {
	val string
}

type I struct {
	val int
}

type B struct {
	val bool
}

func (a *HttpArgs) Add(s string, v HttpValue) {
	(*a)[s] = v
}

func NewHttpArgs() HttpArgs {
	return make(HttpArgs)
}

func (s S) ToString() string { return s.val }
func (i I) ToString() string { return fmt.Sprintf("%d", i.val) }
func (b B) ToString() string {
	i := 0
	if b.val {
		i = 1
	}
	return fmt.Sprintf("%d", i)
}

func (a HttpArgs) ToValues() url.Values {
	ret := url.Values{}
	for k, v := range a {
		ret.Set(k, v.ToString())
	}
	return ret
}

func HttpArgsFromKeyValuePair(key string, val HttpValue) HttpArgs {
	ret := HttpArgs{}
	ret[key] = val
	return ret
}
