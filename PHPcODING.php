<?php

interface Workable 
{
    public function work();
    public function test();
}

class Programing implements Workable
{
    public function code()
    {
        return 'coding';
    }
}

class Tester 
{
    public function test() 
    {
        return 'testing';
    }
}

class ProjectManagment
{
    public function process($member)
    {
        if ( $member instanceof Programing)
        {
            $member -> code();
        }

    }
}


?>