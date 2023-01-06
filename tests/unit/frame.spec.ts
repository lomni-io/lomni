import {enrichFrames, generateTagCardinality} from "@/store/frame";
import {FramesData} from "@/entity/frame";

describe('enrichFrames', () => {
    test('test sort tags by cardinality', () => {
        const frames = [
            {
                title: 'a',
                favIconUrl: 'a',
                url: 'https://test2.ski.com',
                tags: ['#ski2023'],
                updatedAt: 1,
            },
            {
                title: 'a',
                favIconUrl: 'a',
                url: 'https://test.ski.com/abc',
                tags: ['#24k', '#ski2023', '#abcc'],
                updatedAt: 1,
            },
            {
                title: 'a',
                favIconUrl: 'a',
                url: 'https://test2.ski.com/abc2',
                tags: ['#24k', '#ski2023'],
                updatedAt: 1,
            }
        ]
        const expected = [
            {
                title: 'a',
                url: 'https://test2.ski.com',
                favIconUrl: 'a',
                kind: 'url',
                domain: 'test2.ski.com',
                preProcessedTags: ['#ski', '#test2'],
                tags: ['#ski2023'],
                updatedAt: 1,
            },
            {
                title: 'a',
                url: 'https://test.ski.com/abc',
                favIconUrl: 'a',
                kind: 'url',
                domain: 'test.ski.com',
                preProcessedTags: ['#ski', '#test'],
                tags: ['#ski2023', '#24k', '#abcc'],
                updatedAt: 1,
            },
            {
                title: 'a',
                url: 'https://test2.ski.com/abc2',
                favIconUrl: 'a',
                kind: 'url',
                domain: 'test2.ski.com',
                preProcessedTags: ['#ski', '#test2'],
                tags: ['#ski2023', '#24k'],
                updatedAt: 1,
            }
        ]
        expect(enrichFrames(frames)).toStrictEqual(expected)
    })
    test('test web and note frame', () => {
        const frames = [
            {
                title: 'a',
                favIconUrl: 'a',
                url: 'https://test2.ski.com',
                tags: ['#ski2023'],
                updatedAt: 1,
            },
            {
                id: '123',
                content: 'abc',
                tags: ['#myNote'],
                updatedAt: 1,
            },
        ]
        const expected = [
            {
                title: 'a',
                url: 'https://test2.ski.com',
                favIconUrl: 'a',
                kind: 'url',
                domain: 'test2.ski.com',
                preProcessedTags: ['#ski', '#test2'],
                tags: ['#ski2023'],
                updatedAt: 1,
            },
            {
                id: '123',
                content: 'abc',
                kind: "note",
                tags: ['#myNote'],
                preProcessedTags: ['#note'],
                updatedAt: 1,
            },
        ]
        expect(enrichFrames(frames)).toStrictEqual(expected)
    })
    test('test empty frames', () => {
        const frames: FramesData = []
        const expected: FramesData = []
        expect(enrichFrames(frames)).toStrictEqual(expected)
    })
})

describe('generateTagCardinality', () => {
    test('generateTagCardinality 1', () => {
        const tags = ['#tag1', '#tag2', '#tag2']

        const expected = new Map<string, number>([
            ['#tag1', 1],
            ['#tag2', 2]
        ])
        expect(generateTagCardinality(tags)).toStrictEqual(expected)
    })
    test('generateTagCardinality 2', () => {
        const tags = ['#tag1', '#tag2', '#tag2', '#tag3']

        const expected = new Map<string, number>([
            ['#tag1', 1],
            ['#tag2', 2],
            ['#tag3', 1]
        ])
        expect(generateTagCardinality(tags)).toStrictEqual(expected)
    })
})