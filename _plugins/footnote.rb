# frozen_string_literal: true

module Jekyll
  class Footnote < Liquid::Tag
    def initialize(_tag_name, text, _tokens)
      super
      @text = text
    end

    def render(_context)
      [
        '<sup>',
        '<a href="#fn:',
        @text, '">',
        @text,
        '</a>',
        '</sup>'
      ].join
    end
  end
end

Liquid::Template.register_tag('fn', Jekyll::Footnote)
