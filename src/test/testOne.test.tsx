import React from 'react';
import { render, screen } from '@testing-library/react';
 
 
describe('testOne practice', () => {
    test('测试jest.fn()调用', () => {
        let mockFn = jest.fn();
        let result = mockFn(1, 2, 3);
    
        // 断言mockFn的执行后返回undefined
        expect(result).toBeUndefined();
        // 断言mockFn被调用
        expect(mockFn).toBeCalled();
        // 断言mockFn被调用了一次
        expect(mockFn).toBeCalledTimes(1);
        // 断言mockFn传入的参数为1, 2, 3
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    })
    test('测试jest.fn()返回固定值', () => {
        let mockFn = jest.fn().mockReturnValue(12)
    
        // 断言mockFn执行后返回值为12
        expect(mockFn()).toBe(12);
    })
    test('测试jest.fn()内部实现', () => {
        let mockFn = jest.fn((a, b) => {
            return a / b
        })
        expect(mockFn(40, 8)).toBe(5);
    })
})
  
  
  
  